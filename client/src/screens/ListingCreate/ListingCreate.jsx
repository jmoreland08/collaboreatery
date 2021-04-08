import React from "react";
import { useState } from "react";
import { createListing } from "../../services/listings";
import { Modal, Button, Form } from "react-bootstrap";
import "./ListingCreate.css";

function ListingCreate({ show, setShow, fetchListings }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [image_url, setImg_url] = useState("");
  const [price_point, setPrice_point] = useState("");

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
    fetchListings();
    setShow(false);
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={() => setShow(false)}>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Restaurant
        </Modal.Title>
      </Modal.Header>
      <Form className="form-container" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            required
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Form.Control
            required
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <Form.Control
            required
            placeholder="Cuisine"
            onChange={(e) => setCuisine(e.target.value)}
          />
          <br />
          <Form.Control
            as="textarea"
            rows={3}
            required
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <Form.Control
            required
            placeholder="Price Point"
            onChange={(e) => setPrice_point(e.target.value)}
          />
          <br />
          <Form.Control
            as="textarea"
            rows={2}
            required
            placeholder="Image URL"
            onChange={(e) => setImg_url(e.target.value)}
          />
        </Form.Group>
        <Modal.Footer>
          <Button id="form-button" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ListingCreate;
