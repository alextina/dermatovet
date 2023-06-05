import { Component } from '@angular/core';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public sharedSvc: SharedServiceService,
  ) { }

}
