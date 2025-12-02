

import React, { useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeFormDialog from '../components/EmployeeFormDialog';
import EmployeeDetailsDialog from '../components/EmployeeDetailsDialog';
import { useAppSelector } from '../hooks/reduxHooks';
import type { Employee } from '../features/employees/types';
import {signOut} from 'firebase/auth';
import {auth} from '../services/firebase';
import {
  PageWrapper,
  Content,
  Header,
  TitleBlock,
  Title,  
  Actions,
  AddButton,
  LogOutBtn,
  AddIcon,
  Card,
  TableWrapper,
} from '../styledComp/empPage';

const EmployeesPage: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const employees = useAppSelector((state) => state.employees.items);
  const selectedEmployee: Employee | null =
    employees.find((e) => e.id === selectedId) ?? null;

  const handleAdd = () => {
    setSelectedId(null);
    setOpenForm(true);
  };

  const handleRowClick = (id: string) => {
    setSelectedId(id);
    setOpenDetails(true);
  };

  const handleEditClick = (id: string) => {
    setSelectedId(id);
    setOpenForm(true);
  };

  const handleLogOut = async ()=>{
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <PageWrapper>
      <Content>
        <Header>
          <TitleBlock>
            <Title>Employee Management</Title>
          </TitleBlock>

          <Actions>
            <AddButton onClick={handleAdd}>
              <AddIcon>＋</AddIcon>
              Add Employee
            </AddButton>

            <LogOutBtn onClick={handleLogOut}>
             Logout
            </LogOutBtn>
          </Actions>
        </Header>

        <Card>
          <TableWrapper>
            <EmployeeTable
              onRowClick={handleRowClick}
              onEditClick={handleEditClick}
            />
          </TableWrapper>
        </Card>

        <EmployeeFormDialog
          open={openForm}
          onClose={() => setOpenForm(false)}
          employee={selectedEmployee}
        />

        <EmployeeDetailsDialog
          open={openDetails}
          onClose={() => setOpenDetails(false)}
          employee={selectedEmployee}
        />
      </Content>
    </PageWrapper>
  );
};

export default EmployeesPage;
