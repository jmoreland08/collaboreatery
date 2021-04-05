import React from "react";
import { useState, useEffect } from "react";
import { createListing } from "../../services/listings";

function ListingCreate(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [image_url, setImg_url] = useState("");
  const [price_point, setPrice_point] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit functional");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input />
        Location: <input />
        Cuisine: <input />
        Description: <input />
        Price Point: <input />
        Image URL: <input />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ListingCreate;
