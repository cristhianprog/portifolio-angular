import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

//interface
import { IProjects } from '../../../interface/IProjects.interface';
import { ptProjectsTranslate } from '../../../enum/translate/projects/pt-projects';
import { enProjectsTranslate } from '../../../enum/translate/projects/en-projects';
import { appService } from '../../../services/app.service';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{
  translate: any = enProjectsTranslate;
  public description: string = this.translate.description;

  constructor(
    private _diaLogRef: MatDialogRef<DialogProjectsComponent>,
    private appService: appService,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects,
  ){  

    if(this.appService.languageCurrent === 'pt'){
      this.translate = ptProjectsTranslate;
    }else{
      this.translate = enProjectsTranslate;
    }

    this.description = this.translate.description;
 
  }

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
      this.getData.set(this._data);
  }

  public closeModal(){
    return this._diaLogRef.close();
  }
}
