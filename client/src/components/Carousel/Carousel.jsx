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
          {/* console.log(randListing) */}
          <Link to={`/listings/${randListing._id}`}>
            <img
              className="d-block"
              src={randListing.image_url}
              alt="First slide"
            />
          </Link>

          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://images.unsplash.com/photo-1560187839-85fa7adfcf39?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://images.unsplash.com/photo-1512838154171-97c4fa39f33b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHJlc3RhdXJhbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
