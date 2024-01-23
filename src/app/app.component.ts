import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { GridComponent } from './grid/grid.component';
import { FooterComponent } from './footer/footer.component';
import { ColumnsComponent } from './columns/columns.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,OpcionesComponent, GridComponent, FooterComponent, ColumnsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'colegio-tailwind';
}
