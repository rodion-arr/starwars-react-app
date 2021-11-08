/* istanbul ignore file */
import {createLogger} from "redux-logger";
import {Middleware} from "redux";

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action) => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

const developmentEnvironment = process.env.NODE_ENV === 'development';

const middleware: Middleware[] = [];

if (developmentEnvironment) {
  middleware.push(logger);
}

export {middleware};
