import { useParams, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListing, deleteListing } from "../../services/listings";
import {addFavorite} from "../../services/users"
import Layout from "../../components/shared/Layout/Layout";
import "./ListingDetail.css";
import ListingEdit from "../ListingEdit/ListingEdit";

const ListingDetail = (props) => {
  const { id } = useParams();
  const [listing, setListing] = useState([]);
  const [show, setShow] = useState(false);
  const [editToggleFetch, setEditToggleFetch] = useState(false);
  const [pricePoint, setPricePoint] = useState("")
  const history = useHistory();

  useEffect(() => {
    const fetchListing = async () => {
      const listing = await getListing(id);
      setListing(listing);
      if (listing.price_point <= 20) {
        setPricePoint('$')
      } else if (listing.price_point > 20 && listing.price_point <= 40) {
        setPricePoint('$$')
      } else if (listing.price_point > 40 && listing.price_point <= 60) {
        setPricePoint('$$$')
      } else if (listing.price_point > 60 && listing.price_point <= 80) {
        setPricePoint('$$$$')
      } else {
        setPricePoint('$$$$$')
      }
    };
    fetchListing();
  }, [editToggleFetch, id]);

  const deleteCurrentListing = async () => {
    await deleteListing(listing._id);
    history.push("/listings");
  };


  // const addNewFavorite = async () => {
  //   await addFavorite(User._id);

  // }

  return (
    <Layout user={props.user}>
      <div className="listing">
        <div className="listing-img-price">
          <img src={listing.image_url} alt="listing" />
        </div>
        <div className="listing-info">
          <h4>{listing.name}</h4>
          <h4>{listing.location}</h4>
          <h4>{listing.cuisine}</h4>
          <h4>{pricePoint}</h4>

          <p>{listing.description}</p>
          <button id="delete-button" onClick={deleteCurrentListing}>
            Delete
          </button>
          <button id="edit-button" onClick={() => setShow(true)}>
            Edit
          </button>
          <button id="add-to-favorites" onClick={() => addFavorite(props.user.id, listing._id)}>Add to favorites</button>
        </div>
        {props.user ? (
          <ListingEdit
            user={props.user}
            show={show}
            setShow={setShow}
            editToggleFetch={editToggleFetch}
            setEditToggleFetch={setEditToggleFetch}
          />
        ) : (
          <Redirect to="/" />
        )}
      </div>
    </Layout>
  );
};

export default ListingDetail;
