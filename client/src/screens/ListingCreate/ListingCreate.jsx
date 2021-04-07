import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { createListing } from "../../services/listings";
import { Modal, Button } from "react-bootstrap";
import "./ListingCreate.css";

function ListingCreate(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [image_url, setImg_url] = useState("");
  const [price_point, setPrice_point] = useState("");
  // const [show, setShow] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newListing = {
      name,
      image_url,
      description,
      price_point,
      location,
      cuisine,
    };
    const newListingData = await createListing(newListing);
    console.log(newListingData);
    // setShow(false);
  };

  return (
    //add  user={props.user} to layout tag once users are implemented
    <Layout>
      <Modal
        // {...props}
        // show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Restaurant
          </Modal.Title>
        </Modal.Header>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            required
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            required
            placeholder="Cuisine"
            onChange={(e) => setCuisine(e.target.value)}
          />
          <input
            required
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            required
            placeholder="Price Point"
            onChange={(e) => setPrice_point(e.target.value)}
          />
          <input
            required
            placeholder="Image URL"
            onChange={(e) => setImg_url(e.target.value)}
          />
          <Modal.Footer>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </Layout>
  );
}

export default ListingCreate;
