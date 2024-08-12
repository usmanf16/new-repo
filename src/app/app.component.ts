import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SyncfusionGridComponent } from './syncfusion-grid/syncfusion-grid.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SyncfusionGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test1';
}
