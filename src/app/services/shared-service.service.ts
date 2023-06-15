import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(
    private router: Router,
  ) { }

  goHome(): void {
    this.router.navigate([''])
    window.scrollTo(0, 0);
  }

  goDermatologia(): void {
    this.router.navigate(['dermatologia'])
    window.scrollTo(0, 0);
  }

  goAseo(): void {
    this.router.navigate(['aseo'])
    window.scrollTo(0, 0);
  }

  goLocales(): void {
    this.router.navigate(['contacto'])
    window.scrollTo(0, 0);
  }

  goContacto(): void {
    this.router.navigate(['contacto'])
    window.scrollTo(0, 0);
  }

}
