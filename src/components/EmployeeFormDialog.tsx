import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks/reduxHooks';
import {
  addEmployee,
  updateEmployee,
} from '../features/employeesSlice';
import type { Employee } from '../features/employees/types';

interface EmployeeFormDialogProps {
  open: boolean;
  onClose: () => void;
  employee: Employee | null;
}

interface EmployeeFormValues {
  name: string;
  department: string;
  role: string;
  email: string;
  phone: string;
}

const EmployeeSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  department: Yup.string().required('Department is required'),
  role: Yup.string().required('Role is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
});


const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  font-size: 0.82rem;
  font-weight: 500;
  color: #e5e7eb;
`;

const StyledField = styled(Field)`
  width: 100%;
  border-radius: 0.7rem;
  border: 1px solid rgba(55, 65, 81, 0.9);
  background: rgba(15, 23, 42, 0.95);
  padding: 0.55rem 0.75rem;
  font-size: 0.85rem;
  color: #e5e7eb;
  outline: none;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.7);
    background: rgba(15, 23, 42, 1);
  }

  &::placeholder {
    color: #6b7280;
  }
`;



const ErrorText = styled.div`
  font-size: 0.75rem;
  color: #fca5a5;
`;



const EmployeeFormDialog: React.FC<EmployeeFormDialogProps> = ({
  open,
  onClose,
  employee,
}) => {
  const dispatch = useAppDispatch();

  const initialValues: EmployeeFormValues = {
    name: employee?.name ?? '',
    department: employee?.department ?? '',
    role: employee?.role ?? '',
    email: employee?.email ?? '',
    phone: employee?.phone ?? '',
  };

  const isEditMode = !!employee;

  const handleSubmit = async (values: EmployeeFormValues) => {
    if (isEditMode && employee) {
      await dispatch(
        updateEmployee({
          id: employee.id,
          ...values,
        } as Employee)
      );
    } else {
      await dispatch(
        addEmployee({
          ...values,
        })
      );
    }
    onClose();
  };

  return (
<Dialog
  open={open}
  onClose={onClose}
  fullWidth
  maxWidth="sm"
  PaperProps={{
    className:
      "rounded-[18px] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.4),rgba(15,23,42,0.98))] text-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.9)]",
  }}
>
    <div className="bg-[#000000] overflow-hidden ">

  <DialogTitle className="pb-1 text-[1.1rem] font-semibold tracking-[0.02em]">
    {isEditMode ? "Edit Employee" : "Add Employee"}
  </DialogTitle>

  <DialogContent className="pt-3">


    <Formik
      initialValues={initialValues}
      validationSchema={EmployeeSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <FormRow>
            <Label htmlFor="name">Name *</Label>
            <StyledField id="name" name="name" placeholder="Employee name" />
            <ErrorMessage
              name="name"
              render={(msg) => <ErrorText>{msg}</ErrorText>}
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="department">Department *</Label>
            <StyledField
              id="department"
              name="department"
              placeholder="e.g. Engineering, HR"
            />
            <ErrorMessage
              name="department"
              render={(msg) => <ErrorText>{msg}</ErrorText>}
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="role">Role *</Label>
            <Field className="rounded-[0.7rem] border border-gray-700 bg-gray-900 px-3 py-2 text-gray-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="role" name="role" as="select">
              <option value="">Select role</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
              <option value="HR">HR</option>
              <option value="QA">QA</option>
            </Field>
            <ErrorMessage
              name="role"
              render={(msg) => <ErrorText>{msg}</ErrorText>}
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="email">Email *</Label>
            <StyledField
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
            />
            <ErrorMessage
              name="email"
              render={(msg) => <ErrorText>{msg}</ErrorText>}
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="phone">Phone *</Label>
            <StyledField
              id="phone"
              name="phone"
              placeholder="+20 xxx xxx xxxx"
            />
            <ErrorMessage
              name="phone"
              render={(msg) => <ErrorText>{msg}</ErrorText>}
            />
          </FormRow>

          <DialogActions className="mt-3 px-0 pb-1 flex justify-end gap-2">
            <Button
              onClick={onClose}
              variant="text"
              className="normal-case text-[0.85rem] text-gray-400 hover:bg-slate-800/80"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              className="normal-case text-[0.88rem] font-semibold rounded-full px-5 py-1.5 bg-[linear-gradient(135deg,#2563eb,#4f46e5)] shadow-[0_14px_30px_rgba(37,99,235,0.55)] hover:bg-[linear-gradient(135deg,#1d4ed8,#4338ca)] hover:shadow-[0_18px_40px_rgba(37,99,235,0.7)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isEditMode ? "Save changes" : "Add employee"}
            </Button>
          </DialogActions>
        </StyledForm>
      )}
    </Formik>
  </DialogContent>
    </div>
</Dialog>

  );
};

export default EmployeeFormDialog;
