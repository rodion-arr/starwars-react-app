import React from "react";
import {URI} from "./uri";
import {RouteConfig} from "react-router-config";
import App from "../App";

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

export const routesConfig: RouteConfig[] = [
  {
    component: App,
    routes: [
      {
        path: URI.home,
        exact: true,
        component: Home,
      },
      {
        path: URI.films.base,
        component: Films,
        exact: true,
      },
      {
        path: URI.films.detail,
        component: FilmDetail,
      },
      {
        path: URI.people.base,
        component: People,
        exact: true,
      },
      {
        path: URI.people.detail,
        component: CharDetail,
      },
      {
        path: URI.planets.base,
        component: Planets,
        exact: true,
      },
      {
        path: URI.planets.detail,
        component: PlanetDetail,
      },
      {
        path: URI.species,
        component: Species,
      },
      {
        path: URI.starships,
        component: Starships,
      },
      {
        path: URI.vehicles,
        component: Vehicles,
      },
    ],
  },
];
