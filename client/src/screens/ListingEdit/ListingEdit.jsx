import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { updateListing, getListing } from "../../services/listings";

function ListingEdit(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [image_url, setImg_url] = useState("");
  const [price_point, setPrice_point] = useState("");
  const [listing, setListing] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      const listing = await getListing(id);
      setListing(listing);
      setName(listing.name);
      setDescription(listing.description);
      setLocation(listing.location);
      setCuisine(listing.cuisine);
      setImg_url(listing.image_url);
      setPrice_point(listing.price_point);
    };
    fetchListing();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedListing = {
      name,
      image_url,
      description,
      price_point,
      location,
      cuisine,
    };
    const editedListingData = await updateListing(id, editedListing);
    console.log(editedListingData);
  };

  return (
    //add  user={props.user} to layout tag once users are implemented
    <Layout>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <h1>Edit Restaurant</h1>
          <input
            required
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            required
            value={cuisine}
            placeholder="Cuisine"
            onChange={(e) => setCuisine(e.target.value)}
          />
          <input
            required
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            required
            value={price_point}
            placeholder="Price Point"
            onChange={(e) => setPrice_point(e.target.value)}
          />
          <input
            required
            value={image_url}
            placeholder="Image URL"
            onChange={(e) => setImg_url(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default ListingEdit;
