import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { ApiCiudades } from '../services/api-ciudades.service';
import { Ciudad, InfoCiudad } from '../models/ciudades.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-detalle-ciudad',
  standalone: true,
  imports: [CommonModule, MatDialogClose, MatIcon],
  templateUrl: './detalle-ciudad.html',
  styleUrl: './detalle-ciudad.scss',
})

export class DetalleCiudad implements OnInit {
  readonly data = inject(MAT_DIALOG_DATA);

  infoCiudad!: InfoCiudad;
  horaActual: string | null = null;

  constructor(
    private apiInfoCiudades: ApiCiudades,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getInfoCiudad(this.data.ciudad);
  }

  getInfoCiudad(ciudad: Ciudad) {
    this.apiInfoCiudades.getInfoCiudad(ciudad.clave).subscribe((resp: any) => {
      this.infoCiudad = resp[0];

      if (this.infoCiudad?.capital && this.infoCiudad?.region) {
        this.apiInfoCiudades.getHoraCiudad(this.infoCiudad.region, this.infoCiudad.capital[0]).subscribe((res: any) => {
          this.horaActual = res.datetime

        });
      }
      this.cdr.detectChanges();
    });
  }

  getIdiomas(languages: { [key: string]: string }) {
    return Object.values(languages).join(', ');
  }

  cerrarModal() {
    this.data.dialogRef.close();
  }
}
