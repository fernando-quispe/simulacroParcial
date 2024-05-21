import { Component, Input, OnInit } from '@angular/core';
import { Github } from '../clases/github';
import { GithubService } from '../servicios/github.service';
import { FormsModule } from '@angular/forms';
import { GithubComponent } from '../shared/github/github.component';
import { MenuGralComponent } from '../shared/menu-gral/menu-gral.component';
import { isNull, isNullOrUndefined } from 'util';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [FormsModule, GithubComponent, MenuGralComponent],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})

export class BienvenidoComponent implements OnInit {
  user: Github = null; //as any;
  //user: Github = null; al principio..agregue any

  constructor(private _githubService:GithubService){}

  ngOnInit(): void {
   this._githubService.getUser().subscribe(user => this.user = user);
  }
}