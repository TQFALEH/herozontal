import { Component, OnInit } from '@angular/core';
import { comp } from 'src/app/shared/comp.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  comp:comp = [
    {
      name: ' Princess Nourah University',
      logo: 'https://www.pnu.edu.sa/_layouts/15/PNU_Theme/ar-sa/imgs/mainLogoAR.jpg',
      city: 'Riyadh',
    },
    {
      name: 'University of Jeddah',
      logo: 'https://uj-identity.uj.edu.sa/Images/222/%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%AC%D8%AF%D8%A9.png',
      city: 'Jeddah',
    },
  ];
  constructor() {}
  ngOnInit(

  ): void {

  }
}
