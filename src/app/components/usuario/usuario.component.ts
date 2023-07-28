import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUsersService } from 'src/app/services/api-users.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  personaje:any = {}
  constructor(private router: ActivatedRoute, private apiUsers: ApiUsersService){

    this.router.params.subscribe(params =>{
      console.log(params)
      this.getPeronaje(params['id']);
    });

  }

  getPeronaje(id: string) {
    this.apiUsers.getPersonaje(id)
    .subscribe( personajeApi =>{
      console.log(personajeApi)
      this.personaje = personajeApi;
    });
  }

}
