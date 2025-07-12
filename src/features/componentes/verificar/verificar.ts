import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { VerificarService } from '../../../core/servicios/verificar.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-verificar',
  standalone: true, // Sin 'standalone: true' no funcionaba el <mat-toolbar>
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
  ],
  templateUrl: './verificar.html',
  styleUrl: './verificar.css'
})
export class VerificarComponent implements OnInit {

  constructor(private verificarService: VerificarService) { }

  ngOnInit(): void {
    this.verificarDiaFestivo();
  }


  public fechaSeleccionada: Date | null = null;


  public verificarDiaFestivo() {
    if (this.fechaSeleccionada) {
      const anho = this.fechaSeleccionada.getFullYear();
      const mes = this.fechaSeleccionada.getMonth() + 1; // Enero = 0
      const dia = this.fechaSeleccionada.getDate();

      this.verificarService.verificarFestivo(anho, mes, dia).subscribe({
        next: (respuesta: string) => {
          window.alert(respuesta); // Muestra "Es festivo" o "No es festivo de la api"
        },
        error: (error: any) => {
          window.alert("Error al verificar la fecha");
        }
      });
    } else {
      window.alert("Por favor, selecciona una fecha válida");
    }
  }

}
