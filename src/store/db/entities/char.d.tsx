export interface Char {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: any[];
  starships: any[];
  created: string;
  edited: string;
  id: string;
}

export function isChar(object: unknown): object is Char {
  return Object.prototype.hasOwnProperty.call(object, 'name')
    && Object.prototype.hasOwnProperty.call(object, 'height')
    && Object.prototype.hasOwnProperty.call(object, 'gender');
}
