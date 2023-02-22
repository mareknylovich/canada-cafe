import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getQuery } from '../../utils/navigation';
import { PaymentPopupView } from './View';

export const PaymentPopup = ({ ...props }) => {
  const { socket } = useSelector(({ socket }) => ({
    socket,
  }));

  const { open } = props;

  useEffect(() => {
    const ref = getQuery('ref') || localStorage.getItem('ref');
    const service = 5;

    if (open && ref) {
      socket.emit('PAYMENT_NOTIFICATION', { type: 'MODAL_OPEN', telegramId: ref, service });
    }
  }, [open, socket]);
  return <PaymentPopupView {...props} />;
};
