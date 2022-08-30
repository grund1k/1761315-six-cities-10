import { AuthStatus, NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import { State } from '../../types/store';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
export const getEmail = (state: State): string => state[NameSpace.User].email;

export const useGetAuthStatus = () => useAppSelector(getAuthStatus);
export const useGetEmail = () => useAppSelector(getEmail);
