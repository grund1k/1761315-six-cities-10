import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

const Logout = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(logoutAction());
  }, [dispatch]);

  return(
    <div>You successfully logout</div>
  );
};

export default Logout;
