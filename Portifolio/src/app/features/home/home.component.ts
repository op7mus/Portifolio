import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { IntroComponent } from './components/intro/intro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    IntroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
