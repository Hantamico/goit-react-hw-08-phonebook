export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectContact = state => state.auth.user;
export const selectIsAuthError = state => state.auth.isAuthError;
export const selectIsRefreshing = state => state.auth.isRefreshing;