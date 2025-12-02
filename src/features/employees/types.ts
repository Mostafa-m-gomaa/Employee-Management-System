// export type EmployeeRole = 'developer' | 'Designer' | 'Manager' | 'HR' | 'QA';

export interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  email?: string;
  phone?: string;
  gender?: 'male' | 'female';
}
