import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoginStatus } from '../store/authSlice';
import { getMe } from '../services/login';

export const useAuthEffect = (user, id, cookies, refresh) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isSuccess) {
      dispatch(setLoginStatus(true));
    }
  }, [user.isSuccess, dispatch]);

  useEffect(() => {
    const userId = id.userId;
    dispatch(getMe(userId));
  }, [dispatch, id.userId]);

  useEffect(() => {
    if (cookies.refreshToken === refresh.token) {
      dispatch(setLoginStatus(true));
    } else {
      dispatch(setLoginStatus(false));
    }
  }, [cookies.refreshToken, dispatch, refresh.token]);
};
