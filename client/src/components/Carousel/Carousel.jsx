import React from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";
import { getListings } from "../../services/listings";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Carousels() {
  const [allListings, setAllListings] = useState([]);
  let randListing = allListings[Math.floor(Math.random() * allListings.length)];

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
      
    };
    fetchListings();
  }, []);
  if (!randListing) {
    return <h1>Loading ....</h1>;
  }

  return (
    <div id="carousel-div">
      <Carousel id="landing-carousel">
        <Carousel.Item>

            <Link to={`/listings/${randListing._id}`}>
              <img
              className="d-block"
              src={randListing.image_url}
              alt="first slide"
              />
            </Link>
          
          <Carousel.Caption>
            <h3>{randListing.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={randListing.image_url}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{randListing.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={randListing.image_url}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{randListing.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
