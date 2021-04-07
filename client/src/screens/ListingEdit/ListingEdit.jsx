import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateListing, getListing } from "../../services/listings";
import { Modal, Button, Form } from "react-bootstrap";
import "./ListingEdit.css";

function ListingEdit({ show, setShow, editToggleFetch, setEditToggleFetch }) {
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
    setShow(false);
    setEditToggleFetch(!editToggleFetch);
  };

  return (
    //add  user={props.user} to layout tag once users are implemented
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={() => setShow(false)}>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Restaurant
        </Modal.Title>
      </Modal.Header>
      <Form className="form-container" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            required
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Form.Control
            required
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <Form.Control
            required
            value={cuisine}
            placeholder="Cuisine"
            onChange={(e) => setCuisine(e.target.value)}
          />
          <br />
          <Form.Control
            as="textarea"
            rows={3}
            required
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <Form.Control
            required
            value={price_point}
            placeholder="Price Point"
            onChange={(e) => setPrice_point(e.target.value)}
          />
          <br />
          <Form.Control
            as="textarea"
            rows={2}
            required
            value={image_url}
            placeholder="Image URL"
            onChange={(e) => setImg_url(e.target.value)}
          />
        </Form.Group>
        <Modal.Footer id="modal-footer">
          <Button id="form-button" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ListingEdit;
