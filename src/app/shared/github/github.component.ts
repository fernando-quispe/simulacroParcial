import { Component, Input, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { Github } from '../../clases/github';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GithubComponent implements OnInit{
  @Input()  user: Github; // sabiendo que el valor de esta variable miembro se
                           // definiría a tiempo, es decir, se definiría antes de ser utilizada, 
                           //podemos decirle al compilador que no se preocupe porque no se define.
                           //La forma de decirle esto al compilador es agregar el !
  // @Input() user: Github; mimodif

  constructor(){}

  ngOnInit(): void {
    
  }
}