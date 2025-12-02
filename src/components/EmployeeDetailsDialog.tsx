import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
} from '@mui/material';
import styled from 'styled-components';
import type { Employee } from '../features/employees/types';

interface EmployeeDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  employee: Employee | null;
}


const DetailsWrapper = styled.div`
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.85rem;
  color: #e5e7eb;
`;

const DetailRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const Label = styled.span`
  font-weight: 500;
  color: #9ca3af;
  min-width: 90px;
`;

const Value = styled.span`
  color: #e5e7eb;
`;

const Divider = styled.div`
  margin: 0.75rem 0 0.3rem;
  height: 1px;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(55, 65, 81, 0),
    rgba(148, 163, 184, 0.8),
    rgba(55, 65, 81, 0)
  );
`;


const EmployeeDetailsDialog: React.FC<EmployeeDetailsDialogProps> = ({
  open,
  onClose,
  employee,
}) => {
  if (!employee) return null;

  return (
    <Dialog
  open={open}
  onClose={onClose}
  fullWidth
  maxWidth="sm"

    className=
      "rounded-[18px] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.4),rgba(15,23,42,0.98))] text-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.9)]"
  
>
  <div className="bg-[#000000] overflow-hidden ">

  <DialogTitle
    className="pb-1 text-[1.05rem] text-white font-semibold tracking-[0.02em] flex items-center gap-2"
  >
    Employee Details
    <Chip
      label={employee.role || "Employee"}
      size="small"
      className="h-[22px] text-[0.7rem] rounded-full bg-slate-900/90 text-blue-100 border border-blue-400/60"
    />
  </DialogTitle>

  <DialogContent className="pt-2 pb-3">
    <DetailsWrapper>
      <DetailRow>
        <Label>Name:</Label>
        <Value>{employee.name}</Value>
      </DetailRow>

      <DetailRow>
        <Label>Department:</Label>
        <Value>{employee.department}</Value>
      </DetailRow>

      <DetailRow>
        <Label>Role:</Label>
        <Value>{employee.role}</Value>
      </DetailRow>

      {(employee.email || employee.phone) && <Divider />}

      {employee.email && (
        <DetailRow>
          <Label>Email:</Label>
          <Value>{employee.email}</Value>
        </DetailRow>
      )}

      {employee.phone && (
        <DetailRow>
          <Label>Phone:</Label>
          <Value>{employee.phone}</Value>
        </DetailRow>
      )}
    </DetailsWrapper>
  </DialogContent>

  <DialogActions className="px-5 pb-3">
    <Button
      onClick={onClose}
      variant="text"
      className="normal-case text-[0.85rem] text-gray-400 hover:bg-slate-800/80"
    >
      Close
    </Button>
  </DialogActions>
    </div>

</Dialog>
  );
};

export default EmployeeDetailsDialog;
