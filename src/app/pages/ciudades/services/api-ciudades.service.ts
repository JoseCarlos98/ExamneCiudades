import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCiudades {

  apiKey = 'AIzaSyBqcgLkxHWsTedU6OVslI20Kh7mirh5UmU';
  apiInfoCiudad = 'https://restcountries.com/v3.1'

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
    const zona = regionMap[region] || 'Etc';
    const capitalFormateada = capital.replace(' ', '_');
    const url = `https://worldtimeapi.org/api/timezone/${zona}/${capitalFormateada}`;
    return this.http.get(url);
  }
}
