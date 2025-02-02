import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';
import { appService } from '../../services/app.service';
import { ptKnowledgeTranslate } from '../../enum/translate/knowledge/pt-knowledge';
import { enKnowledgeTranslate } from '../../enum/translate/knowledge/en-knowledge';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [ MatTooltipModule ],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icon of html5 knowledge',
      tooltip: 'HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icon of css2 knowledge',
      tooltip: 'CSS3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icon of Javascript knowledge',
      tooltip: 'Javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icon of Angular knowledge',
      tooltip: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icon of NodeJs knowledge',
      tooltip: 'NodeJs',
    },
  ])

  translate: any = enKnowledgeTranslate;

  knowledge = this.translate.knowledge;

  constructor(private appService: appService) {
    
    this.appService.language.subscribe((language) => {
      this.changeLanguage(language);
    });

  }

  changeLanguage(newLanguage: string) {

    if (newLanguage === 'pt') {
      this.translate = ptKnowledgeTranslate;
    } else {
      this.translate = enKnowledgeTranslate;
    }

    this.knowledge = this.translate.knowledge;
  }
}
