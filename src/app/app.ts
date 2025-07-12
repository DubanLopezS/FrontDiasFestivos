import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReferenciasMaterialModule } from '../shared/modulos/referencias-material.module';



@Component({
  selector: 'app-root',
  standalone: true, // Sin 'standalone: true' no funcionaba el <mat-toolbar>
  imports: [RouterOutlet,
    ReferenciasMaterialModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'festivosFront';
}
