export interface Ciudad {
    nombre: string;
    clave: string;
    lat: number;
    lng: number;
}

export interface InfoCiudad {
    name: { official: string; common: string };
    capital: string[];
    region: string;
    subregion: string;
    population: number;
    flags: { png: string; alt: string };
    languages: { [key: string]: string };
    timezones: string[];
    continents: string[];
    capitalInfo: { latlng: number[] };
}
