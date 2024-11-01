import { Component, EventEmitter } from '@angular/core';
import { SelectComponent } from '../select/select.component';

type select = {key: string, value:any, img?: any}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SelectComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  


  
  getLangs(): select[]{
    return [
      {
        key: "PT-BR",
        value: "pt-br",
        img: "./img/flags/br-flag.png"
      },
      {
        key: "US",
        value: "us",
        img: "./img/flags/us-flag.png"
      }
    ] 
  }

  changeLang(event: select){
    localStorage.setItem('lang', event.value);
    location.reload();
  }
  getSelectedLangIndex(): number{
    const selected = localStorage.getItem('lang');
    let index = 0;
    this.getLangs().forEach((lang, $index) => {
      if (lang.value == selected) 
        index = $index;
    });
    return index;
  }
}
