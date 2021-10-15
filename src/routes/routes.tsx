import React from "react";
import {URI} from "./uri";
import {RouteConfig} from "react-router-config";
import App from "../App";

const Home = React.lazy(() => import('../pages/Home/ConnectedHome'));
const Films = React.lazy(() => import('../pages/Films'));
const People = React.lazy(() => import('../pages/People'));
const Planets = React.lazy(() => import('../pages/Planets'));
const Species = React.lazy(() => import('../pages/Species'));
const Starships = React.lazy(() => import('../pages/Starships'));
const Vehicles = React.lazy(() => import('../pages/Vehicles'));

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
        path: URI.films,
        component: Films,
      },
      {
        path: URI.people,
        component: People,
      },
      {
        path: URI.planets,
        component: Planets,
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
