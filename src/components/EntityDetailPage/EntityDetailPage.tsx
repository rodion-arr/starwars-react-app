import './EntityDetailPage.scss';
import {CharacteristicsTable} from "../CharacteristicsTable/CharacteristicsTable";
import React from "react";
import {ImagesService} from "../../services/images.service";

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
      <div className="entity-detail__title-wrap">
        <h2 className="entity-detail__title">{name}</h2>
      </div>
      <div className="entity-detail__img-wrap">
        <img className="entity-detail__img" src={image} alt={name} onError={ImagesService.imageErrorHandler}/>
      </div>
      {charProps && (<>
        <div className="entity-detail__title-wrap">
          <h2 className="entity-detail__title">Characteristics</h2>
        </div>
        <CharacteristicsTable rows={charProps} className="entity-detail__spec" />
      </>)}
      {children}
    </div>
  );
};
