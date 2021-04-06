import { Listing } from "../../components/Listing/Listing.jsx";
import { useState, useEffect } from "react";
import { getListings } from "../../services/listings";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import Search from "../../components/Search/Search";
import "./Listings.css";

export const Listings = () => {
  const [allListings, setAllListings] = useState([]);
  const [queryListing, setQueryListing] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
    };
    fetchListings();
  }, []);

  const findListing = allListings.filter((listing) => {
    return (
      listing.cuisine &&
      listing.cuisine.toLowerCase().includes(queryListing.toLowerCase())
    )
  });

  return (
    <Layout>
      <Search queryListing={queryListing} setQueryListing={setQueryListing} />
      {queryListing ? (
        <div className="Listing">
          {findListing.map((listing) => (
            <Link to={`/listings/${listing._id}`}>
              <Listing key={listing._id} listing={listing} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="Listing">
          {allListings.map((listing) => (
            <Link to={`/listings/${listing._id}`}>
              <Listing key={listing._id} listing={listing} />
            </Link>
          ))}
        </div>
      )}
    </Layout>
  );
};
