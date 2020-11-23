import React from 'react';
// Layouts
import Container from 'layout/container/container';
// Components
import CasinoNavigation from 'components/casino-navigation/casino-navigation';
// Styles
import './casino-page.sass';

const CasinoPage = () => {
  return (
    <div className="casino-page">
      <Container>
        <CasinoNavigation className="casino-page__navigation" />
      </Container>
    </div>
  );
};

export default CasinoPage;
