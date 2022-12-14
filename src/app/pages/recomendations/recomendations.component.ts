import { ThemeService } from './../../services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss']
})
export class RecomendationsComponent implements OnInit {
  // Recomendations Section
  recomendationActive: boolean = false;
  recomendationName: string = '';
  recomendationImg: string = '';
  recomendationReview: string = '';
  recomendationCompany: string = '';

  responsiveOptions;

  recomendations = [
    {
      id: 0,
      name: "Maria Alejandra Linares",
      charge: "Product Owner - RapidRatings - Ireland",
      company: 'www.rapidratings.com',
      img: 'mariale.png',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      reviewExplain: 'xxxx',

    },
    {
      id: 1,
      name: "Juan Bustamante",
      charge: "Technical Staff - VMware - Colombia",
      company: 'www.VMware.com',
      img: 'juan-bustamante.png',
      review: "I've been working with Derwing for almost 15 years, he has an insatiable desire to learn, and he demonstrated this by improving his skills as a web developer, even though he came from an infrastructure background. His skills as an entrepreneur are also proven. For all this, Derwing is a valuable member of any IT team and you can only expect the best from him. Derwing’s personality is also impressive. He acts with generosity and compassion and is well-respected by his peers. He is a natural leader and was such a joy to have on my team.",
    },
    {
      id: 2,
      name: "Fulano de tal",
      charge: "CEO of xxx",
      img: 'AvatarPro.png',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 3,
      name: "Javier Malaguera",
      charge: "Support Coordinator Intraway - Colombia",
      company: "www.intraway.com",
      img: 'javier-malaguera.png',
      review: 'Trabaje con Derwing en la Universidad Marítima y posteriormente en dbaccess, es un excelente compañero de trabajo que está dispuesto a colaborar y hacer su parte para avanzar y sacar adelante cualquier proyecto. Siempre ha destacado por su capacidad técnica, de resolución de problemas, gerencia y su calidad humana.'
    }
  ];

  constructor(
    private ThemeService: ThemeService
  ) {
    this.responsiveOptions = this.ThemeService.responsiveOptions;
  }

  ngOnInit(): void {
    this.recomendations = this.recomendations.sort(() => Math.random() - 0.5);
  }


  openRecomendation(recomendation: any) {
    this.recomendationImg = recomendation.img;
    this.recomendationName = recomendation.name;
    this.recomendationReview = recomendation.review;
    this.recomendationActive = true;
    this.recomendationCompany = recomendation.company;


  }

}
