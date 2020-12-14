import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchHorsesTracksData } from 'player-app/redux/horses-tracks/actions';
import { selectHorsesTracks } from 'player-app/redux/horses-tracks/selectors';
// Components
import Accordion from 'shared/components/accordion/accordion';
import AccordionTab from 'shared/components/accordion-tab/accordion-tab';
import Search from 'shared/components/search/search';
import Typography from 'shared/components/typography/typography';
import Button from 'shared/components/button/button';
import Spinner from 'shared/components/spinner/spinner';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
// Styles
import './horses-select.sass';

const HorsesSelect = ({ horsesTracks: { loading, data, error }, fetchHorsesTracksData }) => {

  const [searchValue, setSearchValue] = useState('');

  useLayoutEffect(() => {
    fetchHorsesTracksData();
  }, [fetchHorsesTracksData]);

  const handleSearch = (value) => {
    setSearchValue(value.toLowerCase());
  };

  return (
    <div className="horses-select">
      <div className="horses-select__item">
        <Accordion expanded>
          <Accordion.Toggle>
            <AccordionTab icon="search" title="Search" bordered />
          </Accordion.Toggle>
          <Accordion.Content className="horses-select__search">
            <Typography component="h4" className="horses-select__search-title">Track</Typography>
            <Search className="horses-select__search-input" radius onChange={handleSearch} />
            <Button className="horses-select__search-button" fluid variant="accent">Advanced Search</Button>
          </Accordion.Content>
        </Accordion>
      </div>
      <div className="horses-select__item">
        {error && <ErrorIndicator retry={fetchHorsesTracksData}/>}
        {(!error && loading) && <Spinner boxed/>}
        {(!error && !loading) &&
          <>
            {data.map(({ id, title, items }) => (
              <Accordion key={id} expanded>
                <Accordion.Toggle>
                  <AccordionTab icon="flag-usa" title={title} bordered />
                </Accordion.Toggle>
                <Accordion.Content className="horses-select__list">
                  {items
                    .filter(({ title }) => {
                      return searchValue === '' ? true : (title.toLowerCase().indexOf(searchValue) !== -1)
                    })
                    .map(({ id, title, place, total }) => (
                      <div key={id} className="horses-select__list-item">
                        <Typography component="h4" className="horses-select__list-item-title">{title}</Typography>
                        <div className="horses-select__list-item-info">
                          <Typography component="p" className="horses-select__list-item-place">{place}</Typography>
                          <Typography component="p" className="horses-select__list-item-total">{total}</Typography>
                        </div>
                      </div>
                    ))}
                </Accordion.Content>
              </Accordion>
            ))}
          </>
        }
      </div>
    </div>
  );
};

HorsesSelect.propTypes = {
  horsesTracks: PropTypes.object,
  fetchHorsesTracksData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  horsesTracks: selectHorsesTracks
});

const mapDispatchToProps = dispatch => ({
  fetchHorsesTracksData: () => dispatch(fetchHorsesTracksData())
});

export default connect(mapStateToProps, mapDispatchToProps)(HorsesSelect);
