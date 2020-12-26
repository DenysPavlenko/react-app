import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Utils
import setDangerClass from 'shared/utils/set-danger-class';

const tableContent = (history, agent, handleModalOpen) => {
  const renerItem = (value, onClick) => (
    <Typography
      component="p"
      style={{ cursor: `${onClick && 'pointer'}` }}
      onClick={onClick}
      className={setDangerClass(value)}
    >{value}
    </Typography>
  );

  return [
    {
      title: 'User ID',
      render: ({ id }) => renerItem(id, () => history.push(`/client-control-panel/${id}`))
    },
    {
      title: 'Password',
      render: ({ password }) => renerItem(password)
    },
    {
      title: 'Name',
      render: ({ name }) => renerItem(name)
    },
    {
      title: 'Credit',
      render: ({ credit }) => renerItem(credit)
    },
    {
      title: 'Carry',
      render: ({ carry }) => renerItem(carry)
    },
    {
      title: 'Mon',
      render: ({ mon }) => renerItem(mon, () => handleModalOpen('aaModal', { agent }))
    },
    {
      title: 'Tue',
      render: ({ tue }) => renerItem(tue, () => handleModalOpen('aaModal', { agent }))
    },
    {
      title: 'Wed',
      render: ({ wed }) => renerItem(wed, () => handleModalOpen('aaModal', { agent }))
    },
    {
      title: 'Thu',
      render: ({ thu }) => renerItem(thu, () => handleModalOpen('aaModal', { agent }))
    },
    {
      title: 'Fri',
      render: ({ fri }) => renerItem(fri, () => handleModalOpen('aaModal', { agent }))
    },
    {
      title: 'Sat',
      render: ({ sat }) => renerItem(sat, () => handleModalOpen('aaModal', { agent }))
    },
    {
      title: 'Sun',
      render: ({ sun }) => renerItem(sun, () => handleModalOpen('aaModal', { agent }))
    },
    {
      title: 'Weekly',
      render: ({ weekly }) => renerItem(weekly)
    },
    {
      title: 'Payments',
      render: ({ payments }) => renerItem(payments, () => handleModalOpen('trModal', { agent }))
    },
    {
      title: 'Pending',
      render: ({ pending }) => renerItem(pending)
    },
    {
      title: 'Settle',
      render: ({ settle }) => renerItem(settle)
    },
    {
      title: 'Balance',
      render: ({ balance }) => renerItem(balance)
    },
    {
      title: 'LC Only',
      render: ({ lcOnly }) => renerItem(lcOnly)
    },
    {
      title: 'Rating',
      render: ({ rating }) => renerItem(rating)
    },
  ];
};

export default tableContent;
