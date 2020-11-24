import React from 'react';
// Styles
import './horses-filters.sass';

const filters = [
  { id: 'straight', title: 'Straight' },
  { id: 'exacta', title: 'Exacta' },
  { id: 'trifecta', title: 'Trifecta' },
  { id: 'superfecta', title: 'Superfecta' },
  { id: 'dailyDouble', title: 'Daily Double' },
  { id: 'pick3', title: 'Pick 3' },
  { id: 'pick4', title: 'Pick 4' },
];

const HorsesFilters = () => {
  return (
    <div className="horses-filters">
      <div className="horses-filters__row">
        {filters.map(({ id, title }) => (
          <div key={id} className="horses-filters__filter">
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorsesFilters;
