import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListing } from "../../services/listings";
import Layout from "../../components/shared/Layout/Layout";

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

  console.log(Listing);
  
  return (
    <Layout>
      <div>
        <img src={Listing.image_url} alt="listing" />
        <div>
          <h3>{Listing.name}</h3>
          <p>{Listing.price_point}</p>
          <p>{Listing.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ListingDetail;
