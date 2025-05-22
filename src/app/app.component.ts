import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavComponent } from './app-nav/app-nav.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavComponent],
  standalone: true,
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
