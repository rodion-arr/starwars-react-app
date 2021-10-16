import './EntityDetailPage.scss';
import {CharacteristicsTable} from "../CharacteristicsTable/CharacteristicsTable";
import React from "react";

interface Props {
  name: string;
  image: string;
  charProps?: Record<string, string | JSX.Element>
  children? : JSX.Element;
}

export const EntityDetailPage = ({
  name,
  image,
  charProps,
  children,
}: Props): JSX.Element => {
  return (
    <div className="entity-detail">
      <div className="entity-detail__title"><h2>{name}</h2></div>
      <div className="entity-detail__img"><img src={image} alt={name}/></div>
      {charProps && (<>
        <div className="entity-detail__title"><h2>Characteristics</h2></div>
        <CharacteristicsTable rows={charProps} className="entity-detail__spec" />
      </>)}
      {children}
    </div>
  );
};
