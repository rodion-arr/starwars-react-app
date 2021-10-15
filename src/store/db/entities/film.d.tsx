export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  id: string;
}

export function isFilm(object: unknown): object is Film {
  return Object.prototype.hasOwnProperty.call(object, 'title')
    && Object.prototype.hasOwnProperty.call(object, 'episode_id');
}
