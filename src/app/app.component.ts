import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveComponent } from './components/reactive/reactive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,ReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-Project';
}
