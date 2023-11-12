import { Component, OnInit } from '@angular/core';
import { card } from './why-us-card/why-us-card.component';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {
  whyUsCards: Array<card> = [
    {
      id: 1,
      icon: 'outdoor_garden',
      title: 'local',
      para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero in esse, optio atque quod numquam placeat
      nesciunt rem!`

    },
    {
      id: 2,
      icon: ' diversity_1',
      title: 'lovely',
      para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero in esse, optio atque quod numquam placeat
      nesciunt rem!`

    },
    {
      id: 3,
      icon: 'compost',
      title: 'natural',
      para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero in esse, optio atque quod numquam placeat
      nesciunt rem!`

    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
