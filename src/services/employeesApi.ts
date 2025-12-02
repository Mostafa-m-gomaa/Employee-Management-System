import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from './firebase';
import type { Employee } from '../features/employees/types';

const employeesCollection = collection(db, 'employees');

export const fetchEmployeesApi = async (): Promise<Employee[]> => {
  const snapshot = await getDocs(employeesCollection);
  return snapshot.docs.map(d => ({
    id: d.id,
    ...(d.data() as Omit<Employee, 'id'>),
  }));
};

export const addEmployeeApi = async (employee: Omit<Employee, 'id'>) => {
  const docRef = await addDoc(employeesCollection, employee);
  return { id: docRef.id, ...employee } as Employee;
};

export const updateEmployeeApi = async (employee: Employee) => {
  const docRef = doc(db, 'employees', employee.id);
  await updateDoc(docRef, {
    name: employee.name,
    department: employee.department,
    role: employee.role,
    email: employee.email,
    phone: employee.phone,
  });
  return employee;
};

export const deleteEmployeeApi = async (id: string) => {
  const docRef = doc(db, 'employees', id);
  await deleteDoc(docRef);
  return id;
};
