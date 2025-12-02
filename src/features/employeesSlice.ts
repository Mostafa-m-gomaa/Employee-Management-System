import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Employee } from './employees/types';
import {
  fetchEmployeesApi,
  addEmployeeApi,
  updateEmployeeApi,
  deleteEmployeeApi,
} from '../services/employeesApi';

interface EmployeesState {
  items: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeesState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchEmployees = createAsyncThunk(
  'employees/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchEmployeesApi();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const addEmployee = createAsyncThunk(
  'employees/add',
  async (employee: Omit<Employee, 'id'>, { rejectWithValue }) => {
    try {
      return await addEmployeeApi(employee);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  'employees/update',
  async (employee: Employee, { rejectWithValue }) => {
    try {
      return await updateEmployeeApi(employee);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  'employees/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      return await deleteEmployeeApi(id);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // f
      .addCase(fetchEmployees.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchEmployees.fulfilled,
        (state, action: PayloadAction<Employee[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Failed to load employees';
      })

      // add
      .addCase(addEmployee.fulfilled, (state, action: PayloadAction<Employee>) => {
        state.items.push(action.payload);
      })

      // update
      .addCase(
        updateEmployee.fulfilled,
        (state, action: PayloadAction<Employee>) => {
          const index = state.items.findIndex(e => e.id === action.payload.id);
          if (index !== -1) state.items[index] = action.payload;
        }
      )

      // delete
      .addCase(
        deleteEmployee.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.items = state.items.filter(e => e.id !== action.payload);
        }
      );
  },
});

export default employeesSlice.reducer;
