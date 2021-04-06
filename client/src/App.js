import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./screens/Home/Home";
// import Listings from "./screens/Listings/Listings";
// import ListingCreate from "./screens/ListingCreate/ListingCreate";
// import ListingEdit from "./screens/ListingEdit/ListingEdit";
// import ListingDetail from "./screens/ListingDetail/ListingDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
// import SignIn from "./screens/SignIn/SignIn";
// import SignOut from "./screens/SignOut/SignOut";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);

  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/">
          <Home user={user} />
        </Route> */}
         {/* <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route> */}
        {/* <Route path="/sign-in">
          <SignIn setUser={setUser} />
         </Route> */}
         {/* <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/listings">
          <Listings user={user} />
        </Route>
        <Route path="/add-listing">
          {user ? <ListingCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/listings/:id/edit">
          {user ? <ListingEdit user={user} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/listings/:id">
          <ListingDetail user={user} />
        </Route>  */}
      </Switch>
    </div>
  );
}

export default App;
