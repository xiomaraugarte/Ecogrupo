export type Place = {
    id: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
};

export const PLACES: Place[] = [
    {
        id: '1',
        name: 'Punto Verde Centro',
        description: 'Plástico, papel y vidrio',
        latitude: -17.3935,
        longitude: -66.157,
    },
    {
        id: '2',
        name: 'EcoPunto Norte',
        description: 'Plástico y cartón',
        latitude: -17.375,
        longitude: -66.155,
    },
    {
        id: '3',
        name: 'Reciclaje Sur',
        description: 'Vidrio y latas',
        latitude: -17.405,
        longitude: -66.16,
    },
];
