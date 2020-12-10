import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './settings-table.sass'

const SettingsTable = ({ title, cols, data }) => {
  const hasHeader = cols.some(({ title }) => title);
  const colSpan = cols.length;

  return (
    <div className="settings-table">
      <table className="settings-table__table">
        <thead className="settings-table__header">
          <tr>
            <th className="settings-table__title" colSpan={colSpan}>
              <Typography component="h4">{title}</Typography>
            </th>
          </tr>
          {hasHeader &&
            <tr className="settings-table__heading">
              {cols.map((headerItem, index) => (
                <th key={index}>{headerItem.title}</th>
              ))}
            </tr>
          }
        </thead>
        <tbody className="settings-table__body">
          {data.map((item, idx) => (
            <tr key={idx} className="settings-table__row">
              {cols.map((col, key) => (
                <td key={key}>{col.render(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SettingsTable;
