import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isVisible = true;
  fruits = ['Apple', 'Banana', 'Cherry'];

  items = ['Gujrat', 'MP', 'Goa', 'Keral', 'MH'];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    
  }
}
