import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // route.params es un observable(objeto que se ejecuta asincronicamente)
    // este bloque se va a subscribir por primera vez en el ngOnInit
    // Si mi componente nunca va a ser cambiado desde el mismo, esto no es necesario quizas
    // Para cambiar de usuario por el link a del html
    this.route.params.
      subscribe((params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      });
  }

}
