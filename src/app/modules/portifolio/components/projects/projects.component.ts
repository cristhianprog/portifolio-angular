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

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
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
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Linkedin',
      width: '100px',
      height: '51px',
      description: '<p>Projeto em JAva feito para aprendimzagem e aperfeiçoamento de padrões de projetos utilizados atualmente em diversos locais tanto para projetos para mercado de trabalho.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/eder15720/workshopSpring3',
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
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Linkedin',
      width: '100px',
      height: '51px',
      description: '<p>Projeto em JAva feito para aprendimzagem e aperfeiçoamento de padrões de projetos utilizados atualmente em diversos locais tanto para projetos para mercado de trabalho.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/eder15720/workshopSpring3',
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
