import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { CurrencyRupeeRounded } from "@mui/icons-material";
import { db } from "../../FirebaseConfig"; // for when submi on Add than go to firebase store
import { collection, getDocs, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useAppStore } from "../../appStore";

function AddProduct({ closeEvent }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "products"); // used to call db products

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const createUser = async () => {
    await addDoc(empCollectionRef, {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    });
    getUsers(); // to used update the list
    closeEvent();
    Swal.fire("Submited", "Your file has been submited.", "success");
  };

  const getUsers = async () => {
    // for all documents already have inside of firebase is callad that used below code
    const data = await getDocs(empCollectionRef);
    // after called its sets on "setRows"
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // to set id
  };

  const currencies = [
    {
      value: "Mobile",
      label: "Mobile",
    },
    {
      value: "Laptop",
      label: "Laptop",
    },
    {
      value: "Electronics",
      label: "Electronics",
    },
    {
      value: "Food",
      label: "Food",
    },
  ];

  return (
    <>
      <div>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Product
        </Typography>
        <CloseSharpIcon
          style={{ position: "absolute", top: "15", right: "15" }}
          onClick={closeEvent}
        ></CloseSharpIcon>

        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              value={name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              onChange={handleNameChange}
              sx={{ minWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              size="small"
              type="number"
              value={price}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeRounded />
                  </InputAdornment>
                ),
              }}
              onChange={handlePriceChange}
              sx={{ minWidth: "100%", marginTop: "16px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              select
              label="Category"
              variant="outlined"
              size="small"
              value={category}
              onChange={handleCategoryChange}
              sx={{ minWidth: "100%", marginTop: "16px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              <Button variant="contained" onClick={createUser}>
                AddProduct
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default AddProduct;
