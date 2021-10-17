import React from "react";
import './CharacteristicsTable.scss';

interface Props {
  className?: string;
  rows: Record<string, string | JSX.Element>;
}

export const CharacteristicsTable = ({
  className = '',
  rows,
}: Props): JSX.Element | null => {
  const charProperties = Object.keys(rows);
  if (charProperties.length === 0) {
    return null;
  }

  return (
    <div className={`${className} detail-spec-table`}>
      <table className="detail-spec-table__table">
        <tbody>
          {charProperties.map((propName, index) => (<tr key={index}>
              <td>{propName}</td>
              <td>{rows[propName]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
