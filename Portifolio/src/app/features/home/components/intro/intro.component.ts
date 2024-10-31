import { Component } from '@angular/core';
import { Translate } from '../../../../pipes/translate.pipe';
import { I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    Translate,
    I18nSelectPipe
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

}
