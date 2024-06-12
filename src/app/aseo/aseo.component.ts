import { Component, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-aseo',
  templateUrl: './aseo.component.html',
  styleUrls: ['./aseo.component.scss']
})
export class AseoComponent {

  constructor(
    private meta: Meta
  ) { }

  selectedService: any;
  detailsTitle: string = '';

  services = [
    {
      "id": 1,
      "title": "Therapy Clean",
      "description": "Therapy Clean es un innovador sistema de baño hipoalergénico para mascotas. Con burbujas diminutas de carga negativa, elimina suavemente la caspa, el sebo y otras impurezas de piel y pelaje sin químicos ni detergentes. Que tu engreído disfrute de un tratamiento natural y profundo que reduce el mal olor, la picazón y la caída de pelo, siendo amigable con el medio ambiente.",
      "details": {
        "Beneficios": [
          "Sin químicos, detergentes o abrasivos.",
          "Reduce el mal olor.",
          "Alivia la picazón.",
          "Disminuye la caída de pelo.",
          "No irrita la piel.",
          "Reduce el estrés y la ansiedad de tu mascota.",
          "Proporciona resultados terapéuticos.",
          "Amigable con el medio ambiente, no contamina el agua con detergentes.",
          "Ideal para mascotas mayores con problemas de articulaciones, dolores y molestias."
        ]
      },
      "image": "../../assets/therapy-clean.webp",
      "link": "https://api.whatsapp.com/send?phone=51979707797&text=Hola,%20deseo%20agendar%20una%20cita%20para%20Therapy-Clean."
    },
    // {
    //   "id": 2,
    //   "title": "Ozonoterapia",
    //   "description": "La Ozonoterapia es un tratamiento innovador que ofrece múltiples beneficios para el cuidado de la piel, la limpieza profunda y el bienestar de tu mascota. Con su efecto antibacterial y antivírico, ayuda a regenerar la piel, controla los malos olores y brinda un agradable masaje corporal que calma el estrés, mejora la circulación y tiene un efecto antiinflamatorio.",
    //   "details": {
    //     "Beneficios": [
    //       "Elimina gérmenes y hongos.",
    //       "Protección contra bacterias.",
    //       "Mejora la circulación sanguínea.",
    //       "Desinflama y relaja.",
    //       "Promueve una piel más sana y limpia.",
    //       "Elimina los olores indeseados."
    //     ]
    //   },
    //   "image": "../../assets/ozonoterapia.webp",
    //   "link": "https://api.whatsapp.com/send?phone=51979707797&text=Hola,%20deseo%20agendar%20una%20cita%20para%20Ozonoterapia."
    // },
    {
      "id": 3,
      "title": "Baño Medicado",
      "description": "Nuestros baños medicados están diseñados para atender las dolencias específicas en la piel. Con la aplicación de medicamentos recetados por veterinarios, aseguramos una recuperación efectiva y rápida, brindando el cuidado necesario para aliviar molestias y mejorar la salud dermatológica de tu peque de 4 patas.",
      "details": {
        "La receta debe indicar": [
          "Medicamento a utilizar en los baños.",
          "Temperatura del agua.",
          "Tiempo de permanencia del medicamento sobre la piel.",
          "Indicaciones de secado."
        ]
      },
      "image": "../../assets/baños-medicados.webp",
      "link": "https://api.whatsapp.com/send?phone=51979707797&text=Hola,%20deseo%20agendar%20una%20cita%20para%20Baños%20Medicados."
    },
    {
      "id": 4,
      "title": "Baño Clásico",
      "description": "Nuestros baños clásicos son ideales para mantener la higiene y limpieza de tu perro. Con productos suaves y respetuosos, brindamos un baño relajante y refrescante que dejará a tu mascota con un pelaje suave y brillante. Disfruta de un cuidado tradicional pero efectivo para mantener a tu engreído siempre impecable.",
      "image": "../../assets//baños-clásicos.webp",
      "link": "https://api.whatsapp.com/send?phone=51979707797&text=Hola,%20deseo%20agendar%20una%20cita%20para%20Baños%20Clásicos."
    }
  ]

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Descubre nuestros servicios de aseo y tratamientos especializados para mantener la piel y el pelaje de tu mascota en óptimas condiciones. Con productos de calidad y técnicas profesionales, brindamos limpieza profunda, terapias naturales y soluciones dermatológicas. Confía en DermatoVet para el cuidado completo de tu engreído.' });
  }

  openModal(service: any) {
    this.selectedService = service;
    this.detailsTitle = service.details ? Object.keys(service.details)[0] : '';
  }

  closeModal() {
    this.selectedService = null;
    this.detailsTitle = '';
  }

  goWhatsApp(service: any) {
    window.open(service.link, '_blank');
  }

}
