import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [FormsModule,CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  // isHighlighted = true;
  isUnderlined = false;

  isHighlighted = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
