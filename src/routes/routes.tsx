import React from "react";
import {URI} from "./uri";
import App from "../App";
import {RouteObject} from "react-router";

const Home = React.lazy(() => import('../pages/Home/ConnectedHome'));
const Films = React.lazy(() => import('../pages/Films/ConnectedFilms'));
const People = React.lazy(() => import('../pages/People/ConnectedPeople'));
const Planets = React.lazy(() => import('../pages/Planets/ConnectedPlanets'));
const Species = React.lazy(() => import('../pages/Species/ConnectedSpecies'));
const Starships = React.lazy(() => import('../pages/Starships/ConnectedStarships'));
const Vehicles = React.lazy(() => import('../pages/Vehicles/ConnectedVehicles'));

const CharDetail = React.lazy(() => import('../pages/CharDetail/ConnectedCharDetail'));
const FilmDetail = React.lazy(() => import('../pages/FilmDetail/ConnectedFilmDetail'));
const PlanetDetail = React.lazy(() => import('../pages/PlanetDetail/ConnectedPlanetDetail'));
const SpecieDetail = React.lazy(() => import('../pages/SpecieDetail/ConnectedSpecieDetail'));
const VehicleDetail = React.lazy(() => import('../pages/VehicleDetail/ConnectedVehicleDetail'));
const StarshipDetail = React.lazy(() => import('../pages/StarshipDetail/ConnectedStarshipDetail'));

export const routesConfig: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: URI.home,
        element: <Home />,
      },
      {
        path: URI.films.base,
        element: <Films />,
      },
      {
        path: URI.films.detail,
        element: <FilmDetail />,
      },
      {
        path: URI.people.base,
        element: <People />,
      },
      {
        path: URI.people.detail,
        element: <CharDetail />,
      },
      {
        path: URI.planets.base,
        element: <Planets />,
      },
      {
        path: URI.planets.detail,
        element: <PlanetDetail />,
      },
      {
        path: URI.species.base,
        element: <Species />,
      },
      {
        path: URI.species.detail,
        element: <SpecieDetail />,
      },
      {
        path: URI.starships.base,
        element: <Starships />,
      },
      {
        path: URI.starships.detail,
        element: <StarshipDetail />,
      },
      {
        path: URI.vehicles.base,
        element: <Vehicles />,
      },
      {
        path: URI.vehicles.detail,
        element: <VehicleDetail />,
      },
    ],
  },
];
