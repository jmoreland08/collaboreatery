import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListing } from "../../services/listings";
import Layout from "../../components/shared/Layout/Layout";
import "./ListingDetail.css";

const ListingDetail = (props) => {
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
    <Layout user={props.user}>
      <div className="listing">
        <div className="listing-img-price">
          <img src={Listing.image_url} alt="listing" />
        </div>
        <div className="listing-info">
          <h4>{Listing.name}</h4>
          <h4>{Listing.location}</h4>
          <h4>{Listing.cuisine}</h4>
          <p>{Listing.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ListingDetail;
