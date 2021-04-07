import { Listing } from "../../components/Listing/Listing.jsx";
import { useState, useEffect } from "react";
import { getListings } from "../../services/listings";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import Search from "../../components/Search/Search";
import "./Listings.css";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import Sort from "../../components/Sort/Sort";

export const Listings = (props) => {
  const [allListings, setAllListings] = useState([]);
  const [queryListing, setQueryListing] = useState([]);
  const [sortType, setSortType] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
      setQueryListing(listings);
    };
    fetchListings();
  }, [toggleFetch]);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueryListing(AZ(allListings));
        break;
      case "name-descending":
        setQueryListing(ZA(allListings));
        break;
      case "price-ascending":
        setQueryListing(lowestFirst(allListings));
        break;
      case "price-descending":
        setQueryListing(highestFirst(allListings));
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    const newQueriedProducts = allListings.filter((listing) =>
      listing.cuisine.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueryListing(newQueriedProducts, () => handleSort(sortType));
  };


  const toggleToggleFetch = () => {
    setToggleFetch(!toggleFetch);
  };

  const handleSubmit = (event) => event.preventDefault();


  return (
    <Layout fetchListings={toggleToggleFetch} user={props.user}>



      <Search onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />

      {queryListing ? (
        <div className="Listing">
          {queryListing.map((listing) => (
            <div key={listing._id} className="listing-card">
              <Link to={`/listings/${listing._id}`}>
                <Listing key={listing._id} listing={listing} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="Listing">
          {allListings.map((listing) => (
            <div key={listing._id} className="listing-card">
              <Link to={`/listings/${listing._id}`}>
                <Listing key={listing._id} listing={listing} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};
