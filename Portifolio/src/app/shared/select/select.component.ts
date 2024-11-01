import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


type select = {key: string, value:any, img?: any}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input()
  options: select[] = []
  @Input()
  selectedIndex: number = 0;
  @Input()
  id: string = ""
  @Output()
  onChange: EventEmitter<select> = new EventEmitter<select>();

  protected opened = false;

  open(){
    this.opened = !this.opened
  }

  select(index: number) {
    this.selectedIndex = index;
    this.opened = false;
    this.onChange.emit(this.options[this.selectedIndex]);
  }

}
