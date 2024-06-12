import { Component } from '@angular/core';
import { FormServiceService } from '../services/form-service.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  form: any = {
    nombre: '',
    email: '',
    local: '',
    servicio: '',
    message: ''
  };
  formError: string = '';
  messageSent: boolean = false;
  sending: boolean = false;

  locales = [
    {
      "distrito": "Jesús María",
      "direccion": "Edificio El Jacaranda, Local 104",
      "googleMaps": "https://goo.gl/maps/HpCM3otPAnFvtQwZ7",
      "telefono": "936626192",
      "whatsapp": "https://api.whatsapp.com/send?phone=51936626192&text=Hola,%20vengo%20de%20la%20web",
      "horario": "Lunes a Sábado de 9:00 a 19:00"
    },
    {
      "distrito": "San Borja",
      "direccion": "Av. Angamos Este 2581",
      "googleMaps": "https://goo.gl/maps/ZxiyD7FWSNGc9PSw9",
      "telefono": "934092287",
      "whatsapp": "https://api.whatsapp.com/send?phone=51934092287&text=Hola,%20vengo%20de%20la%20web",
      "horario": "Lunes a Sábado de 9:00 a 19:00"
    },
  ];

  servicios = [
    "Cita Dermatológica",
    "Therapy Clean",
    // "Ozonoterapia",
    "Baño Clásico",
    "Baño Medicado"
  ];

  constructor(
    private formSvc: FormServiceService,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Estamos aquí para responder tus preguntas y atender las necesidades de tu mascota. Ponte en contacto con DermatoVet a través de nuestro formulario en línea, WhatsApp o teléfono. Nuestro amable equipo estará encantado de ayudarte y brindarte la información que necesitas. ¡Estamos ansiosos por escucharte!' });
  }

  onSubmit(): void {
    if (this.validateForm()) {
      this.sending = true;

      this.formSvc.submitForm(this.form)
        .then(data => {
          this.messageSent = true;
          this.sending = false;

          setTimeout(() => {
            this.messageSent = false;
            this.clearForm();
          }, 2000);
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          this.sending = false;
        });
    }
  }

  validateForm(): boolean {
    this.formError = '';

    if (!this.form.nombre || !this.form.email || !this.form.local || !this.form.servicio || !this.form.mensaje) {
      this.formError = 'Todos los campos son requeridos.';
      return false;
    }

    if (!this.isValidEmail(this.form.email)) {
      this.formError = 'Formato de correo electrónico no válido.';
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  clearForm(): void {
    this.form.nombre = '';
    this.form.email = '';
    this.form.local = '';
    this.form.servicio = '';
    this.form.mensaje = '';
  }

}
