export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: any[];
  films: string[];
  created: string;
  edited: string;
  id: string;
}

export function isVehicle(object: unknown): object is Vehicle {
  return Object.prototype.hasOwnProperty.call(object, 'name')
    && Object.prototype.hasOwnProperty.call(object, 'vehicle_class');
}
