import { Component } from '@angular/core';
import { PeopleService } from '../core/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public peopleSvc:PeopleService
  ) {

  }

}
