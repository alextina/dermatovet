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
  ) { }

  services = [
    {
      "title": "Therapy Clean",
      "image": "../../assets/therapy-clean.png"

    },
    {
      "title": "Ozonoterapia",
      "image": "../../assets/ozonoterapia.png"
    },
    {
      "title": "Baño Medicado",
      "image": "../../assets/baños-medicados.png"
    },
    {
      "title": "Baño Clásico",
      "image": "../../assets/baños-clásicos.png"
    }
  ]

}
