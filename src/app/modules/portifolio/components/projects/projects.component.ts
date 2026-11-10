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
      description: '<p>Meus projetos públicos e estudos em Angular, .NET e desenvolvimento assistido por IA.</p>',
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
    }
  ];

  public arrayProjectsEn: IProjects[] = [
    {
      src: 'assets/img/projects/gitHub.svg',
      alt: '',
      title: 'GitHub Projects',
      width: '100px',
      height: '51px',
      description: '<p>My public projects and experiments with Angular, .NET and AI-assisted development.</p>',
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
      description: '<p>A coffee shop storefront built with Angular 19 and modern Angular features (standalone components, Signals), with product listing and a full shopping cart flow. CI runs on GitHub Actions.</p>',
      links: [
        {
          name: 'View project',
          href: 'https://coffee-store-cj.vercel.app',
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
