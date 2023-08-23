import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import Navbarj from "../components/Navbarj";
import "../Dash.css";
import ProductList from "./products/ProductList";

function Products() {
  return (
    <>
      <div className="bgcolor">
        <Navbarj />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
           <ProductList /> 
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Products;
