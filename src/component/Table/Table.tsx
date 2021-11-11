import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import * as React from "react";

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  {
    product: "Baju",
    category: "Baju",
    totalBarang: 8,
    totalHarga: 30000,
    status: "pending",
  },
  {
    product: "Baju",
    category: "Baju",
    totalBarang: 8,
    totalHarga: 30000,
    status: "pending",
  },
  {
    product: "Baju",
    category: "Baju",
    totalBarang: 8,
    totalHarga: 30000,
    status: "pending",
  },
];

export const DataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nama Produk</TableCell>
            <TableCell align="right">Kategori</TableCell>
            <TableCell align="right">Total Barang</TableCell>
            <TableCell align="right">Total Harga </TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            return (
              <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.product}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.totalBarang}</TableCell>
                <TableCell align="right">{row.totalHarga}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
