import { FC } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { stats } from "../constants/stats";

export const StatsTable: FC = () => (
  <TableContainer>
    <Table size="small">
      <TableHead>
        <TableRow>
          {stats.head.map((value) => (
            <TableCell key={value}>{value}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {stats.body.map((row) => (
          <TableRow key={row[0]}>
            {row.map((value) => (
              <TableCell key={value}>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
