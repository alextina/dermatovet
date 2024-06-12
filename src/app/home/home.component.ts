import { Component } from '@angular/core';
import { SharedServiceService } from '../services/shared-service.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public sharedSvc: SharedServiceService,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'DermatoVet: Especialistas en Dermatología Veterinaria. Cuidamos de la piel y el bienestar de tu mascota con más de 10 años de experiencia. Confía en nosotros para brindarle el mejor cuidado y nunca dejes de abrazarlo. ¡Visita nuestra clínica hoy mismo!' });
  }

  services = [
    {
      "title": "Therapy Clean",
      "image": "../../assets/therapy-clean.webp"

    },
    // {
    //   "title": "Ozonoterapia",
    //   "image": "../../assets/ozonoterapia.webp"
    // },
    {
      "title": "Baño Medicado",
      "image": "../../assets/baños-medicados.webp"
    },
    {
      "title": "Baño Clásico",
      "image": "../../assets/baños-clásicos.webp"
    }
  ]

}
