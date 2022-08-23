import { AuthStatus, NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import { State } from '../../types/store';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;

export const useGetAuthStatus = () => useAppSelector(getAuthStatus);
