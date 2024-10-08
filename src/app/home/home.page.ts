import { Component, Inject } from '@angular/core';
import { PeopleService } from '../core/services/people.service';
import { PreferencesService } from '../core/services/preferences.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor( public peopleSvc:PeopleService) {

  }

}
