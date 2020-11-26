import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchHorsesTracksData } from 'redux/horses-tracks/actions';
import { selectHorsesTracks } from 'redux/horses-tracks/selectors';
// Components
import Accordion from 'components/accordion/accordion';
import AccordionTab from 'components/accordion-tab/accordion-tab';
import Search from 'components/search/search';
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Spinner from 'components/spinner/spinner';
// Styles
import './horses-select.sass';

const HorsesSelect = ({ horsesTracks: { loading, data, error }, fetchHorsesTracksData }) => {

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
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
            <Search className="horses-select__search-input" radius handleSearchInput={handleSearch} />
            <Button className="horses-select__search-button" fluid variant="accent">Advanced Search</Button>
          </Accordion.Content>
        </Accordion>
      </div>
      <div className="horses-select__item">
        {error && <ErrorIndicator />}
        {(!error && loading) && <div className="horses-select__spinner"><Spinner /></div>}
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