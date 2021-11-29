import React from "react";
import {useRoutes} from "react-router-dom";
import {RouteObject} from "react-router";

interface Props {
  routes: RouteObject[]
}

export const WithRouter = ({ routes }: Props): React.ReactElement | null => {
  return useRoutes(routes);
};
