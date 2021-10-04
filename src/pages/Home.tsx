import {HomeBanner} from "../components/HomeBanner/HomeBanner";
import {CatalogCategory} from "../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";

export default function Home(): JSX.Element {
  return <>
    <HomeBanner />
    <CatalogCategory title="People" />
    <CatalogCategory title="Ships" />
  </>
}
