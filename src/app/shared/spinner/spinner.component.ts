import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [SpinnerComponent, FormsModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    
  }
}