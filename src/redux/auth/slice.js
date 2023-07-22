import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  fetchContacts,
  addContact,
  deleteContact,
  refreshUser,
  logout
} from './operationsAuth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthError: false,
  contacts: [],
  filterValue: '',
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    filterContacts(state, action) {
      state.filterValue = action.payload;
    },
  },

  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
    },
    [register.rejected](state, _action) {
      state.isAuthError = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
    },
    [login.rejected](state, _action) {
      state.isAuthError = true;
    },
    [logout.fulfilled](state, _action) {
      state.user = { name: null, email: null };
      state.token = null
      state.isLoggedIn = false
      state.isRefreshing = false
      state.isAuthError = false
      state.contacts = []
      state.filterValue = ''
      state.isLoading = false
      state.error = false
    },

    [fetchContacts.pending](state, _) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, _) {
      state.isLoading = false;
      state.error = true;
      // console.log(state.error);
    },

    [addContact.pending](state, _) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, _) {
      state.isLoading = false;
      state.error = true;
    },

    [deleteContact.pending](state, _) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected](state, _) {
      state.isLoading = false;
      state.error = true;
    },
     [refreshUser.pending](state, _) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state, _) {
      state.isRefreshing = false;
    },
  },
});

export const filterContacts = authSlice.actions.filterContacts;

export const authRedusers = authSlice.reducer;