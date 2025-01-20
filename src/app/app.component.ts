import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-Project';
}
