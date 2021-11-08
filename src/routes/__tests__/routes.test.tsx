import {routesConfig} from "../routes";

describe('routes', () => {
  it('should have correct routes object', () => {
    const routes: string[] = [];
    routesConfig[0].routes?.forEach((route) => routes.push(String(route.path)));

    expect(routes.includes('/')).toBe(true);
    expect(routes.includes('/people')).toBe(true);
    expect(routes.includes('/planets')).toBe(true);
    expect(routes.includes('/species')).toBe(true);
    expect(routes.includes('/vehicles')).toBe(true);
    expect(routes.includes('/films')).toBe(true);
    expect(routes.includes('/starships')).toBe(true);
    expect(routes.includes('/people/:id')).toBe(true);
    expect(routes.includes('/planets/:id')).toBe(true);
    expect(routes.includes('/species/:id')).toBe(true);
    expect(routes.includes('/vehicles/:id')).toBe(true);
    expect(routes.includes('/films/:id')).toBe(true);
    expect(routes.includes('/starships/:id')).toBe(true);
  });
});
