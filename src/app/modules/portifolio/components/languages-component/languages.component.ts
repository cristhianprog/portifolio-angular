import { Component, signal } from '@angular/core';
import { appService } from '../../services/app.service';
import { enLanguagesTranslate } from '../../enum/translate/languages-componet/en-languages';
import { ptLanguagesTranslate } from '../../enum/translate/languages-componet/pt-languages';
import { ILanguages } from '../../interface/ILanguages.interface';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {


  arrayPt = [
    {
      src: 'assets/icons/br.png',
      alt: 'Ícone Portugues',
      level: 'Proficiência Nativa'

    },
    {
      src: 'assets/icons/eua.png',
      alt: 'Ícone Inglês',
      level: 'Proficiência C1/C2'
    },

  ]

  arrayEn = [
    {
      src: 'assets/icons/br.png',
      alt: 'Portuguese Icon',
      level: 'Native or bilingual proficiency'

    },
    {
      src: 'assets/icons/eua.png',
      alt: 'English Icon',
      level: 'C1/C2 Proficiency'
    },

  ]

  public arrayLanguage = signal<ILanguages[]>(this.arrayPt)

  translate: any = enLanguagesTranslate;
  languages = this.translate.languages;

  constructor(private appService: appService) {
    
    this.appService.language.subscribe((language) => {
      this.changeLanguage(language);
    });

  }

  changeLanguage(newLanguage: string) {

    if (newLanguage === 'pt') {
      this.arrayLanguage.set(this.arrayPt);
      this.translate = ptLanguagesTranslate;
    } else {
      this.arrayLanguage.set(this.arrayEn);
      this.translate = enLanguagesTranslate;
    }

    this.languages = this.translate.languages;
  }
}
