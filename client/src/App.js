import React, { useState, useEffect } from "react";
import "./App.css";
import { getListings } from "./services/listings";

function App() {
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
    };
    fetchListings();
  }, []);

  return (
    <div className="App">
      {allListings.map((listing) => (
        <div>{listing.name}</div>
      ))}
    </div>
  );
}

export default App;
