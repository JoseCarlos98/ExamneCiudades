import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GoogleMap, MapMarker } from "@angular/google-maps";

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DetalleCiudad } from './detalle-ciudad/detalle-ciudad';
import { Ciudad } from './models/ciudades.model';
@Component({
  selector: 'app-ciudades',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    GoogleMap,
    MapMarker
  ],
  templateUrl: './ciudades.html',
  styleUrl: './ciudades.scss'
})
export class Ciudades {
  private readonly dialog = inject(MatDialog);

  // Agregue las latitudes y longites para visualizar los pines en el mapa desde el comienzo como un extra.
  ciudades: Ciudad[] = [
    { nombre: 'Ciudad de México, México', clave: 'mexico', lat: 19.43, lng: -99.13 },
    { nombre: 'París, Francia', clave: 'france', lat: 48.87, lng: 2.33 },
    { nombre: 'Washington DC, Estados Unidos', clave: 'united states', lat: 38.89, lng: 77.05 },
    { nombre: 'Teherán, Irán', clave: 'iran', lat: 35.7, lng: 51.42 },
    { nombre: 'Moscú, Rusia', clave: 'russia', lat: 55.75, lng: 37.6 },
    { nombre: 'Londres, Reino Unido', clave: 'united kingdom', lat: 51.5, lng: 0.08 },
    { nombre: 'Pekín, China', clave: 'china', lat: 25.03, lng: 121.52 },
    { nombre: 'Accra, Ghana', clave: 'ghana', lat: 5.55, lng: 0.22 },
    { nombre: 'Addis Abeba, Etiopía', clave: 'ethiopia', lat: 9.03, lng: 38.7 }
  ];

  constructor() { }

  verCiudad(ciudad:Ciudad) {
    this.dialog.open(DetalleCiudad, {
      data: {
        ciudad,
      },
      width: '80vw',
      maxWidth: '700px',
      maxHeight: '90vh'
    });
  }
}
