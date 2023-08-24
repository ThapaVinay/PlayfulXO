import { Component, Input } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  
  @Input() value: string = '';
}
