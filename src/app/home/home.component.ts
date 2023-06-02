import { Component } from '@angular/core';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public sharedSvc: SharedServiceService,
  ) {

  }

}
