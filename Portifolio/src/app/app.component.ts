import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ["./themes/dark.scss", "./themes/light.scss", "./app.component.scss"]
})
export class AppComponent {
  title = 'Portifolio';

  ngOnInit(){
    const theme = localStorage.getItem('theme');
    if(!theme){
      localStorage.setItem('theme', 'dark');
      location.reload();
    }
    if(theme === 'dark'){
      this.switchTheme('dark')
    }else{
      this.switchTheme('light')
    }
  }


  switchTheme(theme: 'dark' | 'light') {
    const element = document.getElementById('app')!;
    if (theme === 'dark') {
      element.classList.add('dark-theme');
      element.classList.remove('light-theme');
    } else {
      element.classList.add('light-theme');
      element.classList.remove('dark-theme');
    }
  }

}
