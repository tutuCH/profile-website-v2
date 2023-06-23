import { Component } from '@angular/core';
import { Carousel, Dropdown, initTE } from 'tw-elements';
@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent {
  ngOnInit() {
    initTE({ Carousel, Dropdown });
  }
}
