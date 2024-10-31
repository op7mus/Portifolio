import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

import ptbr from "../i18n/pt-br.json";
import us from "../i18n/us.json";

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false
})
@Injectable({
    providedIn: 'root'
})
export class Translate implements PipeTransform {
    
    private lang = 'pt-br';
    private cache : any= {};

    constructor(private http: HttpClient){}

    transform(path : string): string {
        let lang = localStorage.getItem('lang') || null;
        if(lang == null) {
            lang = this.lang;
            localStorage.setItem('lang', lang);
        }

        if(this.cache.lang != lang){
            switch (lang) {
                case 'pt-br':
                    this.cache = ptbr;
                    break;
                case 'us':
                    this.cache = us;
                    break;
            
                default:
                    break;
            }
        }


        const res = path
            .split('.')
            .reduce((acc: any, part: string) => 
                acc && acc[part], this.cache
            );

        return res;
    }

}