import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';
import { appService } from '../../services/app.service';
import { enExperienceTranslate } from '../../enum/translate/experiences/en-experiences';
import { ptExperienceTranslate } from '../../enum/translate/experiences/pt-experiences';
import { experiencesConst } from '../../enum/constantes/experiences-const';

//Interface
@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {


  public arrayExperiences = signal<IExperiences[]>(experiencesConst.enArrayExperiences)

  translate: any = enExperienceTranslate;
  experiences = this.translate.experiences;


  constructor(private appService: appService) {
    this.appService.language.subscribe((language) => {
      this.changeLanguage(language);
    });

  }

  changeLanguage(newLanguage: string) {

    if (newLanguage === 'pt') {
      this.translate = ptExperienceTranslate;
      this.arrayExperiences = signal<IExperiences[]>(experiencesConst.ptArrayExperiences);
    } else {
      this.translate = enExperienceTranslate;
      this.arrayExperiences = signal<IExperiences[]>(experiencesConst.enArrayExperiences);

    }

    
    this.experiences = this.translate.experiences;

  }
}
