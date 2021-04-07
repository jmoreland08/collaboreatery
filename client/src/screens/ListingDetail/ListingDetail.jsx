import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListing, deleteListing } from "../../services/listings";
import Layout from "../../components/shared/Layout/Layout";
import "./ListingDetail.css";

const ListingDetail = () => {
  const { id } = useParams();
  const [Listing, setListing] = useState([]);

  useEffect(() => {
    const fetchListing = async () => {
      const listing = await getListing(id);
      setListing(listing);
    };
    fetchListing();
  }, []);

  return (
    <Layout>
      <div className="listing">
        <div className="listing-img-price">
          <img src={Listing.image_url} alt="listing" />
        </div>
        <div className="listing-info">
          <h4>{Listing.name}</h4>
          <h4>{Listing.location}</h4>
          <h4>{Listing.cuisine}</h4>
          <p>{Listing.description}</p>
          <button id="delete-button" onClick={() => deleteListing(Listing._id)}>
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ListingDetail;
