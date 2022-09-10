import React from "react";
import "../../Styles/Navbar.css";
import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className="logo"
            src={
              "https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Flogo1_edfc81b31b.png&w=256&q=75"
            }
            alt="logo"
          />
          <div className="nav-links">
            <Link
              style={
                props.active === "Resume Templates"
                  ? { color: "rgb(0, 128, 255)" }
                  : null
              }
              className="nav-link"
              to="/">
              Resume Templates
            </Link>
            <Link
              style={
                props.active === "My Resumes"
                  ? { color: "rgb(0, 128, 255)" }
                  : null
              }
              className="nav-link"
              to="/my/resumes">
              My Resumes
            </Link>
            <Link
              style={
                props.active === "About Us"
                  ? { color: "rgb(0, 128, 255)" }
                  : null
              }
              className="nav-link"
              to="/about-us">
              About Us
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
