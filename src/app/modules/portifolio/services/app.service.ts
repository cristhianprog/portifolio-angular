import { Injectable, OnDestroy } from "@angular/core"
import { Subject } from "rxjs";

//Criar um service global
@Injectable({
    providedIn: 'root'
})

export class appService implements OnDestroy {
    public language = new Subject<string>();
    public languageCurrent: string = 'en';

    private root = document.documentElement;

    constructor(
        
    ) {

        this.language.subscribe((language) => {
            if(language === 'pt') {
                this.setPrimaryColor('#46b156', '#368f43');
               
            }else{
                this.setPrimaryColor('#a94242', '#8d3737');
            }

            this.languageCurrent = language;
        }); 

    }

    setPrimaryColor(primary: string, primary010: string) {
        this.root.style.setProperty('--primary', primary);
        this.root.style.setProperty('--primary-010', primary010);
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
   
}





