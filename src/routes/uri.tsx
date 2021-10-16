const base = '/';

export const URI = Object.freeze({
  home: base,
  people: {
    base: `${base}people`,
    detail: `${base}people/:id`,
  },
  planets: {
    base: `${base}planets`,
    detail: `${base}planets/:id`,
  },
  species: {
    base: `${base}species`,
    detail: `${base}species/:id`
  },
  vehicles: `${base}vehicles`,
  films: {
    base: `${base}films`,
    detail: `${base}films/:id`,
  },
  starships: `${base}starships`,
});
