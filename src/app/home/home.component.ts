import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { slide } from '../shared/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[slide]
})
export class HomeComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') dislay = 'block'; 
  constructor() { }

  ngOnInit() {
  }

}
