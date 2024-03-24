import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Options } from '../options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() guestname: string = ""


  extra : Options ={

    size : "XL",
    age : 2

  }

}
