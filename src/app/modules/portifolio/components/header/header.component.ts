import { Component } from '@angular/core';
import { enHeaderTranslate } from '../../enum/translate/header-component/en-header';
import { ptHeaderTranslate } from '../../enum/translate/header-component/pt-header';
import { appService } from '../../services/app.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {
  translate: any = enHeaderTranslate;

  myName = this.translate.myName;
  staks = this.translate.staks;
  locale = this.translate.locale;
  description = this.translate.description;
  dResume = this.translate.dResume;
  sendMessage = this.translate.sendMessage;
  sendEmail = this.translate.sendEmail;
  tooltipPt = this.translate.tooltipPt;
  tooltipEn = this.translate.tooltipEn;

  public pathResume = 'assets/pdf/CristhianResume.pdf'

  constructor(private appService: appService) {

    this.appService.language.subscribe((language) => {
      this.changeLanguage(language);

    });
    
  }

  selectLanguage(language: string) {
    this.appService.language.next(language);
  }

  changeLanguage(newLanguage: string) {
    
    if (newLanguage === 'pt') {
      this.translate = ptHeaderTranslate;
      this.pathResume = 'assets/pdf/CristhianCV.pdf'
    } else {
      this.translate = enHeaderTranslate;
      this.pathResume = 'assets/pdf/CristhianResume.pdf'
    }   

    this.myName = this.translate.myName;
    this.staks = this.translate.staks;
    this.locale = this.translate.locale;
    this.description = this.translate.description;
    this.dResume = this.translate.dResume;
    this.sendMessage = this.translate.sendMessage;
    this.sendEmail = this.translate.sendEmail;
    this.tooltipPt = this.translate.tooltipPt;
    this.tooltipEn = this.translate.tooltipEn;
    
  }

}
