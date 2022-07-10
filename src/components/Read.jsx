import React, { useEffect, useState } from 'react';

import { Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
 import { getUsers, deleteUserById } from "../actions/user";
import * as ReactBootstrap from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const Read = () => {

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);


    // const { users } = useSelector(state => state.user);
    const users = useSelector((state) => state.users?.results);
    const usersPerPage = 7;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure You want to delete?"));
        dispatch(deleteUserById(id));
    }

    useEffect(() => {
        dispatch(getUsers(), setLoading(true));
    }, []);

    return (
        <div className="container" >
            <Card >
                <Card.Header className={"border border-dark bg-dark text-white"}> UserList</Card.Header>
                <Card.Body>
                    <span className="col-md-8">
                        <span className="input-group mb-3 ">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Search user"
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}
                            />
                            <Link type="button" to={'/create'} className="btn btn-primary " id="tab">Add User</Link>
                        </span>
                    </span>

                    <Table variant="" >
                        <thead className={"border border-dark bg-dark text-white"}>
                            <tr>
                                <th>id</th>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ?
                                users.slice(pagesVisited, pagesVisited + usersPerPage).filter(val => {
                                    if (searchTerm === "") {
                                        return val;
                                    } else if (
                                        val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.role.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return val;
                                    }
                                    return false;
                                }).map((user) =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td> {user.email}</td>
                                        <td>{user.name}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <Link type="button" to={'/update/' + user.id} className="btn btn-info">Edit</Link>
                                                    {/* <Link type="button" to={'/details/' + user.id} className="btn btn-warning">Details</Link> */}
                                                <Button type="button" onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</Button>

                                            </div>
                                        </td>
                                    </tr>

                                ) :
                                <ReactBootstrap.Spinner animation="border" variant="primary" />
                            }

                        </tbody>

                    </Table>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttns"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}

                    />
                </Card.Body>

            </Card>
        </div >

    );
}

export default Read;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   makeStyles,
//   useTheme,
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   TableContainer,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   useMediaQuery,
// } from "@material-ui/core";
// import {
//   Add as AddIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
// } from "@material-ui/icons";
// import { useSelector, useDispatch } from "react-redux";
// import { getUsers, deleteUserById } from "../actions/user";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: "center",
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
//   table: {
//     flex: 1,
//     alignContent: "center",
//     justifyContent: "center",
//   },
// }));

// function Read() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const dispatch = useDispatch();
//   const loading = useSelector((state) => state.users?.loading);
//   const users = useSelector((state) => state.users?.results);
//   console.log(users)
//   const [userId, setUserId] = useState("");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     dispatch(getUsers());
//   }, []);

//   useEffect(() => {
//     console.log('loading', loading)
//     if (!loading) {
//       setOpen(loading);
//     }
//   }, [loading]);

//   const openDialog = (_id) => {
//     setOpen(true);
//     setUserId(_id);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const confirmDelete = () => {
//     dispatch(deleteUserById(userId));
//   };

//   return (
//     <React.Fragment>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             ReactJs CRUD App With React Redux Thunk
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Link to="/create">
//         <Button
//           variant="contained"
//           color="primary"
//           className={classes.button}
//           startIcon={<AddIcon />}
//         >
//           Create User
//         </Button>
//       </Link>
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>S.No</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Role</TableCell>
//               <TableCell>Update</TableCell>
//               <TableCell>Delete</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user, index) => (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                   {index + 1}
//                 </TableCell>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//                 <TableCell>
//                   <Link to={`/update/${user._id}`}>
//                     <EditIcon>edit</EditIcon>
//                   </Link>
//                 </TableCell>
//                 <TableCell>
//                   <DeleteIcon onClick={() => openDialog(user._id)}>
//                     delete
//                   </DeleteIcon>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       {open && (
//         <Dialog
//           fullScreen={fullScreen}
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="Delete User"
//         >
//           <DialogContent style={{ width: 300 }}>
//             <DialogContentText>Are you sure?</DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button autoFocus onClick={handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={confirmDelete} color="primary" autoFocus>
//               Delete
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </React.Fragment>
//   );
// }

// export default Read;