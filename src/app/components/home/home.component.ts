import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUsersService } from 'src/app/services/api-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  personajes: any[] = [];


  constructor(private apiUsers: ApiUsersService, private router: Router) {
    this.apiUsers.getPersonajes().subscribe((data: any) => {
      this.personajes = data.results;
    });
  }

  getPersonaje(item: any) {
    let personaj = item.id;

    this.router.navigate(['/personaje', personaj]);
  }
}
