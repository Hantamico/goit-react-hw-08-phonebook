import { useSelector } from "react-redux";

import {
    selectContact,
    selectIsLoggedIn,
    selectIsAuthError,
    selectIsRefreshing
} from '../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectContact);
    const isAuthError = useSelector(selectIsAuthError);
    const isRefreshing = useSelector(selectIsRefreshing)
    return {
        isLoggedIn,
        user,
        isAuthError,
        isRefreshing
    }
}