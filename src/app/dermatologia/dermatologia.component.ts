import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dermatologia',
  templateUrl: './dermatologia.component.html',
  styleUrls: ['./dermatologia.component.scss']
})
export class DermatologiaComponent {

  constructor(
    private meta: Meta,
  ) { }

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Descubre la experiencia y dedicación de la Dra. Vanessa Llerena, especialista en dermatología veterinaria. Con una formación destacada y pasantías en reconocidas instituciones internacionales, brinda soluciones efectivas para las enfermedades de la piel y pelaje de tu mascota. Confía en su expertise y en DermatoVet para el bienestar dermatológico de tu engreído.' });
  }

  estudios = [
    'Graduada como Médico Veterinario en 2004, (Universidad Alas Peruanas).',
    'Pasantías: Dermatología veterinaria en University of Florida. Medicina Interna en Cornell University,Ithaca (USA). Dermatoclínica Sao Paulo, Brasil.',
    'Especialidad en Dermatología Veterinaria en el Centro de Especialidades Médicas Veterinarias en Buenos Aires, Argentina.',
    'Miembro efectivo de la Sociedad Latinoamericana de Dermatología Veterinaria(SLDV).',
    'Miembro fundador de la Asociación Peruana de Dermatología Veterinaria.',
    'Participante y ponente en congresos Internacionales de Dermatología y medicina Veterinaria.'
  ]

  servicios = [
    {
      'servicio': 'Consulta Dermatológica',
      'descripcion': 'Diagnóstico y tratamiento de alergias y otras afecciones de la piel y pelaje.'
    },
    {
      'servicio': 'Otología',
      'descripcion': 'Diagnóstico y tratamiento de alteraciones del oído externo y medio.'
    },
    {
      'servicio': 'Laboratorio',
      'descripcion': 'Pruebas de laboratorio que permiten el adecuado diagnóstico y tratamiento.'
    }
  ]

}
