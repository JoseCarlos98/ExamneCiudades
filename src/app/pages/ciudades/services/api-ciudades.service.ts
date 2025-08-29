import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCiudades {

  apiKey = environment.API_KEY_GOOGLE_MAPS;
  apiInfoCiudad = environment.API_CIUDADES;
  apiTimeZone = environment.API_TIMEZONE;

  constructor(
    private http: HttpClient

  ) { }


  getInfoCiudad(claveCiudad: string) {
    const url = `${this.apiInfoCiudad}/name/${claveCiudad}`;
    return this.http.get(url);
  }

  getHoraCiudad(region: string, capital: string) {
    const regionMap: any = {
      Americas: 'America',
      Europe: 'Europe',
      Asia: 'Asia',
      Africa: 'Africa',
      Oceania: 'Australia'
    };
    const zona = regionMap[region];
    const capitalFormateada = capital.replace(' ', '_');
    const url = `${this.apiTimeZone}/${zona}/${capitalFormateada}`;
    return this.http.get(url);
  }
}
