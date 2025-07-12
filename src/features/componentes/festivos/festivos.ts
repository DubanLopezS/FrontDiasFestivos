import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { Festivo } from '../../../shared/entidades/festivo';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';



@Component({
  selector: 'app-festivos',
  standalone: true, // Sin 'standalone: true' no funcionaba el <mat-toolbar>
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
  ],
  templateUrl: './festivos.html',
  styleUrl: './festivos.css',
})

export class FestivosComponent implements OnInit {

  constructor(private festivoService: FestivoService) { }

  ngOnInit(): void {
    this.obtenerFestivos();
  }

  
  public anho: number | null = null;
  public festivos: Festivo[] = []
  public columnas = [
    { prop: "festivo", name: "Nombre del Festivo" },
    { prop: "fecha", name: "Fecha del Festivo" },
  ];

  public modoColumna = ColumnMode;



  public obtenerFestivos() {
  if (!this.anho || this.anho < 1000 || this.anho > 3000) {
    window.alert("Por favor al momento de ingresar la fecha, ingrese un año valido");
    return;
  }

  this.festivoService.obtenerFestivosPorAño(this.anho).subscribe({
    next: (response) => {
      this.festivos = response;
    },
    error: (error) => {
      window.alert(error.message);
    }
  });
}
}