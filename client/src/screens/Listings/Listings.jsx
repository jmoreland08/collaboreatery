import { Listing } from "../../components/Listing/Listing.jsx"
import { useState, useEffect } from "react";
import { getListings } from "../../services/listings";
import { Link } from "react-router-dom";
import "./Listings.css"

export const Listings = () => {

  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
    };
    fetchListings();
  }, []);

  return (
    <div className="Listing">
      {allListings.map((listing) =>
        <Link to={`/listings/ ${listing._id}`}>
          <Listing listing={listing}/>
        </Link>
      )}
    </div>
  )
}
 