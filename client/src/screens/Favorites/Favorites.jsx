import Layout from "../../components/shared/Layout/Layout";
import { Listing } from "../../components/Listing/Listing.jsx";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserFavorites, verifyUser } from "../../services/users";

export default function Favorites(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  useEffect(() => {
    const getFavorites = async () => {
      const user = await verifyUser();
      const favorites = await getUserFavorites(user.id);
      setUserFavorites(favorites);
    };
    getFavorites();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="Listing">
        {userFavorites.map((listing) => {
          return (
            <div>
              <Link to={`/listings/${listing._id}`}>
                
                <Listing key={Listing._id} listing={listing} />
              </Link>
            </div>
          );
        })}
        
      </div>
    </Layout>
  );
}
