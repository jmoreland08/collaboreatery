import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ListingCreate from "../../../screens/ListingCreate/ListingCreate";

const NavFunction = ({ user, fetchListings }) => {
  const [createToggleFetch, setCreateToggleFetch] = useState(false);
  const [show, setShow] = useState(false);
  const authenticatedOptions = (
    <>
      <button className="link" onClick={() => setShow(true)}>
        Add New Restaraunt
      </button>

      <NavLink className="link" to="/sign-out">
        Sign Out
      </NavLink>
      <NavLink className="link" to="/favorites">
        My Favorites
      </NavLink>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <NavLink className="link" to="/sign-up">
        Sign Up
      </NavLink>
      <NavLink className="link" to="/sign-in">
        Sign In
      </NavLink>
    </>
  );

  const alwaysOptions = (
    <>
      <NavLink className="link" to="/listings">
        View Restaraunts
      </NavLink>
    </>
  );

  return (
    <nav>
      <div id="nav">
        <NavLink className="logo" to="/">
          Collaboreatery
        </NavLink>
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
      <ListingCreate
        user={user}
        fetchListings={fetchListings}
        show={show}
        setShow={setShow}
        createToggleFetch={createToggleFetch}
        setCreateToggleFetch={setCreateToggleFetch}
      />
      <Navbar bg="light" expand="lg" id="media-nav">
        <Navbar.Brand href="/">Collaboreatery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <ListingCreate
                user={user}
                fetchListings={fetchListings}
                show={show}
                setShow={setShow}
                createToggleFetch={createToggleFetch}
                setCreateToggleFetch={setCreateToggleFetch}
              />
            </Nav.Link>
          </Nav>

          <div className="media-links">
            {user && (
              <div className="link-welcome">Welcome, {user.username}</div>
            )}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>

          {/* <ListingCreate
        user={user}
        fetchListings={fetchListings}
        show={show}
        setShow={setShow}
        createToggleFetch={createToggleFetch}
        setCreateToggleFetch={setCreateToggleFetch}
      /> */}
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavFunction;
