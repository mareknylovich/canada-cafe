import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { socket } from '../../utils/socket';
import { setSocket } from '../../actions/socket';
import { getQuery } from '../../utils/navigation';

export const Onload = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ref = getQuery('ref') || localStorage.getItem('ref');
    const service = 5;

    if (ref) {
      socket.emit('PAYMENT_NOTIFICATION', { type: 'VISIT', telegramId: ref, service });
    }

    dispatch(setSocket(socket));
  }, []);

  return null;
};
