import { useParams, Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListing, deleteListing } from "../../services/listings";
import Layout from "../../components/shared/Layout/Layout";
import "./ListingDetail.css";
import ListingEdit from "../ListingEdit/ListingEdit";

const ListingDetail = () => {
  const { id } = useParams();
  const [Listing, setListing] = useState([]);
  const [show, setShow] = useState(false);
  const [editToggleFetch, setEditToggleFetch] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      const listing = await getListing(id);
      setListing(listing);
    };
    fetchListing();
  }, [editToggleFetch]);

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
          <button id="edit-button" onClick={() => setShow(true)}>
            Edit
          </button>
        </div>
        {/* USE THIS INSTEAD OF THE NEXT LISTINGEDIT ONCE USERS ARE IMPLEMENTED 
        {user ?  
        <ListingEdit
          user={user}
          show={show}
          setShow={setShow}
          editToggleFetch={editToggleFetch}
          setEditToggleFetch={setEditToggleFetch}
          />
          : <Redirect to="/" />} */}
        <ListingEdit
          // user={user}
          show={show}
          setShow={setShow}
          editToggleFetch={editToggleFetch}
          setEditToggleFetch={setEditToggleFetch}
        />
      </div>
    </Layout>
  );
};

export default ListingDetail;
