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
  }

  goDermatologia(): void {
    this.router.navigate(['dermatologia'])
  }

  goAseo(): void {
    this.router.navigate(['aseo'])
  }

  goLocales(): void {
    this.router.navigate(['contacto'])
  }

  goContacto(): void {
    this.router.navigate(['contacto'])
  }

}
