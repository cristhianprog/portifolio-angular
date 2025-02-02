import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { appService } from '../../services/app.service';
import { enProjectsTranslate } from '../../enum/translate/projects/en-projects';
import { ptProjectsTranslate } from '../../enum/translate/projects/pt-projects';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})



export class ProjectsComponent {

  translate: any = enProjectsTranslate;
  titleProjects = this.translate.titleProjects;


  public arrayProjectsPt: IProjects[] = [
    {
      src: 'assets/img/projects/gitHub.svg',
      alt: '',
      title: 'Projetos GitHub',
      width: '100px',
      height: '51px',
      description: '<p>Link do GitHb com a disponibilização de projetos/experiencias obtidas por meio de estudos em cursos que fiz para melhoria e aperfeiçoamento da linguagem.</p>',
      links: [
        {
          name: 'Acessar projetos',
          href: 'https://github.com/cristhianprog',
        },
      ]
    },
    {
      src: 'assets/img/projects/coffee.png',
      alt: '',
      title: 'Coffee Store',
      width: '100px',
      height: '51px',
      description: '<p>Projeto desenvolvido em Angular 19 com as tecnologias e ferramentas mais atuais das últimas versões do Angular. Nesse projeto, desenvolvi uma aplicação onde é possível visualizar os produtos de uma loja de café e adicionar eles ao carrinho de compras. Ainda é possível visualizar o carrinho, adicionar mais itens ao carrinho e excluir os itens. (Informações mais completos no GitHub)</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://coffee-store-cj.vercel.app',
        },
      ]
    },
    {
      src: 'assets/img/projects/calculator.png',
      alt: '',
      title: 'Calculator',
      width: '100px',
      height: '51px',
      description: '<p>Projeto iniciante onde todo programador já deve ter feito algum dia no início do seu aprendizado. O desafio era criar uma calculadora onde foram usados alguns conhecimentos no início da minha trajetória de programador. Decidi compartilhar para ajudar novos desenvolvedores e mostrar como resolvo até mesmo os mais simples desafios. (Informações mais completos no GitHub)</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://calculator-angular-cj.vercel.app/3',
        },
      ]
    }
  ];

  public arrayProjectsEn: IProjects[] = [
    {
      src: 'assets/img/projects/gitHub.svg',
      alt: '',
      title: 'GitHub Projects',
      width: '100px',
      height: '51px',
      description: '<p>GitHub link with the availability of projects/experiences obtained through studies in courses I took to improve and perfect the language.</p>',
      links: [
        {
          name: 'Access projects',
          href: 'https://github.com/cristhianprog',
        },
      ]
    },
    {
      src: 'assets/img/projects/coffee.png',
      alt: '',
      title: 'Coffee Store',
      width: '100px',
      height: '51px',
      description: '<p>Project developed in Angular 19 with the most current technologies and tools from the latest versions of Angular. In this project, I developed an application where it is possible to view the products of a coffee shop and add them to the shopping cart. It is also possible to view the cart, add more items to the cart and delete items. (More complete information on GitHub)</p>',
      links: [
        {
          name: 'Access projects',
          href: 'https://coffee-store-cj.vercel.app',
        },
      ]
    },
    {
      src: 'assets/img/projects/calculator.png',
      alt: '',
      title: 'Calculator',
      width: '100px',
      height: '51px',
      description: '<p>A beginner´s project that every programmer must have done at some point in their early learning process. The challenge was to create a calculator that used some of the knowledge I had gained at the beginning of my career as a programmer. I decided to share it to help new developers and show how I solve even the simplest challenges.</p>',
      links: [
        {
          name: 'Access projects',
          href: 'https://calculator-angular-cj.vercel.app/',
        },
      ]
    }
  ];


  public arrayProjects = signal<IProjects[]>([]);

  constructor(private appService: appService) {
    this.appService.language.subscribe((language) => {
      this.changeLanguage(language);

    });

    this.arrayProjects.set(this.arrayProjectsEn);
  }

  #dialog = inject(MatDialog);

  
  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJETCTS
    })
  }

  changeLanguage(newLanguage: string) {
  
      if (newLanguage === 'pt') {
        this.translate = ptProjectsTranslate;
        this.arrayProjects.set(this.arrayProjectsPt);
      } else {
        this.translate = enProjectsTranslate;
        this.arrayProjects.set(this.arrayProjectsEn);

      }
  
      this.titleProjects = this.translate.titleProjects;
  
    }
}
