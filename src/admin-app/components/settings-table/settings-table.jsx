import React, { Fragment } from 'react';
// Styles
import './settings-table.sass'

const SettingsTable = ({ lines, data }) => {
  // const hasHeader = cols.some(({ title }) => title);
  // const colSpan = cols.length;
  return (
    <div className="settings-table">
      <table className="settings-table__table">
        {lines.map((cols, idx) => (
          <Fragment key={idx}>
            <thead className="settings-table__header">
              <tr>
                {cols.map((headerItem, index) => (
                  <th key={index}>{headerItem.title}</th>
                ))}
              </tr>
            </thead>
            <tbody className="settings-table__body">
              {data[idx].map((item, idx) => {
                return (
                  <tr key={idx} className="settings-table__row">
                    {cols.map((col, key) => (
                      <td key={key}>{col.render(item)}</td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </Fragment>
        ))}
      </table>
    </div>
  );
};

export default SettingsTable;
