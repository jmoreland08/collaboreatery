const db = require('../db/connection')
const Listing = require('../models/listing')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getListings = async (req, res) => {
    try {
      const listing = await Listing.find()
      console.log(Listing)
        res.json(listing)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getListing = async (req, res) => {
  try {
    const { id } = req.params
    const listing = await Listing.findById(id)
      if (listing) {
          return res.json(listing)
      }
      res.status(404).json({ message: 'Listing not found!' })
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

const createListing = async (req, res) => {
  try {
      const listing = await new Listing(req.body)
      await listing.save()
      res.status(201).json(listing)
  } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
  }
}

const updateListing = async (req, res) => {
  const { id } = req.params
  await Listing.findByIdAndUpdate(id, req.body, { new: true }, (error, listing) => {
      if (error) {
          return res.status(500).json({ error: error.message })
      }
      if (!listing) {
          return res.status(404).json({ message: 'Listing not found!' })
      }
      res.status(200).json(listing)
  })
}

const deleteListing = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Listing.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Listing deleted")
      }
      throw new Error("Listing not found")
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createListing,
  getListings,
  getListing,
  updateListing,
  deleteListing
}