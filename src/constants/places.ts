export interface Place {
  id: string;
  name: string;
  address: string;
  distance: string;
  materials: string;
  latitude: number;
  longitude: number;
  xPercent: number;
  yPercent: number;
}

export const PLACES: Place[] = [
  {
    id: '1',
    name: 'Punto de acopio',
    address: 'Calle Venezuela entre calle Lanza #123',
    distance: 'A 250 m de ti',
    materials: 'Botellas PET y Bolsas plásticas',
    latitude: -17.3935,
    longitude: -66.157,
    xPercent: 78,
    yPercent: 32,
  },
  {
    id: '2',
    name: 'Punto de acopio',
    address: 'Av. Heroínas y Calle España',
    distance: 'A 400 m de ti',
    materials: 'Vidrio, Cartón y Latas de aluminio',
    latitude: -17.385,
    longitude: -66.162,
    xPercent: 20,
    yPercent: 70,
  },
  {
    id: '3',
    name: 'Punto de acopio',
    address: 'Calle San Martín cerca a Av. Heroínas',
    distance: 'A 550 m de ti',
    materials: 'Pilas, Baterías y Electrónicos',
    latitude: -17.388,
    longitude: -66.153,
    xPercent: 72,
    yPercent: 80,
  },
];