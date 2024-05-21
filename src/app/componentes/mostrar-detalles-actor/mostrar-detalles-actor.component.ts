import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../../clases/actor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mostrar-detalles-actor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mostrar-detalles-actor.component.html',
  styleUrl: './mostrar-detalles-actor.component.css'
})
export class MostrarDetallesActorComponent implements OnInit{
  @Input() actorDetalle: Actor;
  @Output() clickADetalle: EventEmitter<boolean>= new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }

  Volver(peliculaDetalle:boolean){
    this.clickADetalle.emit(peliculaDetalle);
  }
}