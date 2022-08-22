import { AuthStatus, NameSpace } from '../../const';
import { State } from '../../types/store';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
