import Box from "@mui/material/Box"
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, } from "@mui/material";
// import { Fragment, useState } from "react";

// import AccountView from "../Components/AccountView";
import { useEffect, useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";


const columns = [
    { id: 'name', label: <Typography sx={{ fontSize: "24px"}}>Title</Typography>, maxWidth: "40vw" },
    { id: 'options', label: <Button sx={{float: "right", padding: "0 20px", background: "green", color: "#fff", fontSize: "24px"}}>New</Button>, maxWidth: "20vw%"},
    // {
    //   id: 'population',
    //   label: 'Population',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    // },
    // {
    //   id: 'size',
    //   label: 'Size\u00a0(km\u00b2)',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    // },
    // {
    //   id: 'density',
    //   label: 'Density',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toFixed(2),
    // },
  ];
  
  function createData(name, options) {
    // const density = population / size;
    return { name, options };
  }
  
  const rows = [
    createData('Indiadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 230),
    createData('China', 230),
    createData('Italy', 230),
    createData('United States', 230),
    createData('Canada', 230),
    createData('Australia', 230),
    createData('Germany', 230),
    createData('Ireland', 230),
    createData('Mexico', 230),
    createData('Japan', 230),
    createData('France', 230),
    createData('United Kingdom', 230),
    createData('Russia', 230),
    createData('Nigeria', 230),
    createData('Brazil', 230),
  ];

const AdminBlogs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box
            sx={{
                // width: "79vw",
                // padding: "30px",
                // paddingLeft: "21vw",
                background: "#000",
                minHeight: "100vh"
            }}
        >
            <AdminSidebar/>
            <Box
                sx={{
                    width: "79vw",
                    padding: "30px",
                    marginLeft: "21vw",
                    background: "#000",
                    boxSizing: "border-box"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{marginBottom: "30px", marginTop: {xs: "10vh", md: "0vh"},fontWeight: "700", fontSize: "36px", color: "#ffffff"}}
                >
                    Blog Posts
                </Typography>
                <Box
                    sx={{
                        background: "#edeff1",
                        width: "100%",
                        // height: "70vh",
                        borderRadius: "20px",
                        // padding: "20px",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value}
                                            </TableCell>
                                        );
                                        })}
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}
 
export default AdminBlogs;