import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DetalleCiudad } from './detalle-ciudad/detalle-ciudad';
import { Ciudad } from './models/ciudades.model';
@Component({
  selector: 'app-ciudades',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './ciudades.html',
  styleUrl: './ciudades.scss'
})
export class Ciudades {

  dialog = inject(MatDialog);

ciudades: Ciudad[] = [
  { nombre: 'Ciudad de México, México', clave: 'mexico' },
  { nombre: 'París, Francia', clave: 'france' },
  { nombre: 'Washington DC, Estados Unidos', clave: 'united states' },
  { nombre: 'Teherán, Irán', clave: 'iran' },
  { nombre: 'Moscú, Rusia', clave: 'russia' },
  { nombre: 'Londres, Reino Unido', clave: 'united kingdom' },
  { nombre: 'Pekín, China', clave: 'china' },
  { nombre: 'Accra, Ghana', clave: 'ghana' },
  { nombre: 'Addis Abeba, Etiopía', clave: 'ethiopia' }
];



  constructor() { }

  verCiudad(ciudad:Ciudad) {
    this.dialog.open(DetalleCiudad, {
      data: {
        ciudad,
      },
    });
  }

}
