import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dermatovet';
  showHeaderFooter: boolean = true;
  showWhatsAppButton: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isLanding = event.url.includes('/informacion');
        this.showHeaderFooter = !isLanding;
        this.showWhatsAppButton = !isLanding;
      }
    });
  }
}
