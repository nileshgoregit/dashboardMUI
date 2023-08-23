import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { db } from "../../FirebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import AddProduct from "./AddProduct";
import { useAppStore } from "../../appStore";
import EditProduct from "./EditProduct";
import Skeleton from '@mui/material/Skeleton';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const empCollectionRef = collection(db, "products"); // name of "products" -> name of collection
  const [formid, setFormid] = useState("");
  const [editopen, setEditOpen] = useState(false);
  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);
  const handleEditOpen = ()=> setEditOpen(true)
  const handleEditClose = ()=> setEditOpen(false)


  // for when clicked on "ADD" button than open pop-up
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    // for all documents already have inside of firebase is callad that used below code
    const data = await getDocs(empCollectionRef);
    // after called its sets on "setRows"
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // to set id
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  // to deleted id which comes from firebase than its delet when click on delete box
  //   and its deleteted from screen and also firebase

  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows([]); // for not showing double list
      getUsers();
    }
  };

  // when click on edit for that 
  const editData = (id, name, price, category) =>{
    const data = {
      id: id,
      name: name,
      price: price,
      category: category
    }
    setFormid(data)
    handleEditOpen()
  }

  return (
    <>
      <div>
        <Modal
          open={open}
          // onClose={handleClose} when click on outside when click on ADD than not closed.
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddProduct closeEvent={handleClose} />
          </Box>
        </Modal>

        <Modal
          open={editopen}
          // onClose={handleClose} when click on outside when click on ADD than not closed.
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditProduct closeEvent={handleEditClose} fid={formid}/>
          </Box>
        </Modal>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "20px" }}
        >
          Products List
        </Typography>
        <Divider />
        <Box height={10} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rows}
            sx={{ width: 300 }}
            onChange={(e, v) => filterData(v)}
            // when click on box than show which you return when you want price than
            //   return price or name than shown name when click inside textfield
            getOptionLabel={(rows) => rows.category || ""}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Search Products" />
            )}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            endIcon={<AddCircleIcon />}
          >
            Add
          </Button>
        </Stack>
        <Box height={10} />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="row" style={{ minWidth: "100px" }}>
                  Name
                </TableCell>
                <TableCell align="row" style={{ minWidth: "100px" }}>
                  Price
                </TableCell>
                <TableCell align="row" style={{ minWidth: "100px" }}>
                  Category
                </TableCell>
                <TableCell align="row" style={{ minWidth: "100px" }}>
                  Date
                </TableCell>
                <TableCell align="row" style={{ minWidth: "100px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell key={row.id} align={"left"}>
                        {row.name}
                      </TableCell>
                      <TableCell key={row.id} align={"left"}>
                        {row.price}
                      </TableCell>
                      <TableCell key={row.id} align={"left"}>
                        {row.category}
                      </TableCell>
                      <TableCell key={row.id} align={"left"}>
                        {row.date}
                      </TableCell>
                      <TableCell align="left">
                        <Stack spacing={2} direction="row">
                          <EditIcon
                            style={{
                              fontSize: "20px",
                              color: "blue",
                              cursor: "pointer",
                            }}
                            className="cursor-pointer"
                            // onClick={() => editUser(row.id)}
                            onClick={()=>{
                              editData(row.id, row.name, row.price, row.category)
                            }}
                          />
                          <DeleteIcon
                            style={{
                              fontSize: "20px",
                              color: "darkred",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              deleteUser(row.id);
                            }}
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
