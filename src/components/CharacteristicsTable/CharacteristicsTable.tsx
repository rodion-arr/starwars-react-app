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
      <table>
        {charProperties.map((propName) => (<tr>
            <td>{propName}</td>
            <td>{rows[propName]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
