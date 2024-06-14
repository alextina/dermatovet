import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  data = [
    {
      "title": "Central de Citas Dermatológicas",
      "items": [
        {
          "icon": '../../assets/whatsapp-logo.png',
          "text": 'WhatsApp - Central de Citas Dermatológicas',
          "ulr": 'https://wa.link/8ytm17'
        }
      ]
    },
    {
      "title": "Jesús María",
      "items": [
        {
          "icon": 'https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/416326864_1553518042071803_7753396474380204913_n.jpg?ccb=11-4&oh=01_Q5AaIOjl8Tf-O9ACEBRqHxhGqiA1o5GBWY1U2Ir1Rq_UVSDa&oe=6676DEC6&_nc_sid=e6ed6c&_nc_cat=110',
          "text": 'WhatsApp - Jesús María',
          "ulr": 'https://wa.link/tjuyiu'
        },
        {
          "icon": '../../assets/google-maps.png',
          "text": 'Google Maps',
          "ulr": 'http://bit.ly/3FGjkNB'
        }
      ]
    },
    {
      "title": "San Borja",
      "items": [
        {
          "icon": 'https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/415979799_910955903919265_2284941765821536091_n.jpg?ccb=11-4&oh=01_Q5AaIEAHp40uEmdk19HOdEbqZ_tEyad53GHWuLPNULzttpwW&oe=6676C9C6&_nc_sid=e6ed6c&_nc_cat=100',
          "text": 'WhatsApp - San Borja',
          "ulr": 'https://wa.link/tbfft1'
        },
        {
          "icon": '../../assets/google-maps.png',
          "text": 'Google Maps',
          "ulr": 'http://bit.ly/3ncpuhZ'
        }
      ]
    },
    {
      "title": "Redes Sociales",
      "items": [
        {
          "icon": '../../assets/instagram-logo.png',
          "text": 'Instagram',
          "ulr": 'https://www.instagram.com/dermatovet/'
        },
        {
          "icon": '../../assets/facebook-logo.png',
          "text": 'Facebook',
          "ulr": 'https://www.facebook.com/dermatovet.pe/'
        }
      ]
    }
  ]

}
