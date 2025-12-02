
import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchEmployees, deleteEmployee } from '../features/employeesSlice';
import type { RootState } from '../app/store';

interface EmployeeTableProps {
  onRowClick?: (id: string) => void;
  onEditClick?: (id: string) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  onRowClick,
  onEditClick,
}) => {
  const dispatch = useAppDispatch();
  const { items: employees, loading, error } = useAppSelector(
    (state: RootState) => state.employees
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleRowClick = (id: string) => {
    if (onRowClick) onRowClick(id);
  };

  const handleEditClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (onEditClick) onEditClick(id);
  };

  const handleDeleteClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    dispatch(deleteEmployee(id));
  };

  if (loading) {
    return (
      <Typography
        sx={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
          py: 1,
        }}
      >
        Loading employees…
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography
        sx={{
          fontSize: '0.9rem',
          color: '#fecaca',
          py: 1,
        }}
      >
        {error}
      </Typography>
    );
  }

  return (
<Box className="w-full overflow-x-auto">
  <TableContainer
    component={Paper}
    className="shadow-none rounded-[14px]"
  >
    <Table
      aria-label="employees table"
      className="min-w-[700px] border-collapse"
    >
      <TableHead>
        <TableRow className="transparent">
          <TableCell
            className="text-gray-400 text-[0.75rem] uppercase tracking-[0.08em] py-2 border-b border-slate-800/80"
          >
            ID
          </TableCell>
          <TableCell className="text-gray-400 text-[0.75rem] uppercase tracking-[0.08em] py-2 border-b border-slate-800/80">
            Name
          </TableCell>
          <TableCell className="text-gray-400 text-[0.75rem] uppercase tracking-[0.08em] py-2 border-b border-slate-800/80">
            Department
          </TableCell>
          <TableCell className="text-gray-400 text-[0.75rem] uppercase tracking-[0.08em] py-2 border-b border-slate-800/80">
            Role
          </TableCell>
          <TableCell
            align="right"
            className="text-gray-400 text-[0.75rem] uppercase tracking-[0.08em] py-2 border-b border-slate-800/80"
          >
            Actions
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {employees.map((emp) => (
          <TableRow
            key={emp.id}
            hover
            onClick={() => handleRowClick(emp.id)}
            className={`cursor-pointer transition-[background-color,transform] duration-150 ease-out   hover:bg-[rgba(37,99,235,0.35)] hover:-translate-y-[1px] `}
          >
            <TableCell className="text-slate-200 text-[0.85rem] whitespace-nowrap py-[0.45rem] border-b border-slate-800/80">
              {emp.id}
            </TableCell>
            <TableCell className="text-slate-200 text-[0.85rem] whitespace-nowrap border-b border-slate-800/80">
              {emp.name}
            </TableCell>
            <TableCell className="text-slate-200 text-[0.85rem] whitespace-nowrap border-b border-slate-800/80">
              {emp.department}
            </TableCell>
            <TableCell className="text-slate-200 text-[0.85rem] whitespace-nowrap border-b border-slate-800/80">
              {emp.role}
            </TableCell>
            <TableCell
              align="right"
              className="text-slate-200 text-[0.85rem] whitespace-nowrap border-b border-slate-800/80"
            >
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditClick(e, emp.id);
                }}
                className="text-[#cbd5f5] mx-0.5 hover:bg-[rgba(15,23,42,0.7)]"
              >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClick(e, emp.id);
                }}
                className="text-[#fecaca] mx-0.5 hover:bg-[rgba(127,29,29,0.7)]"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>

  );
};

export default EmployeeTable;
