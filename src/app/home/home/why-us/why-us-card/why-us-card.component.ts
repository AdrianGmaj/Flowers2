import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us-card',
  templateUrl: './why-us-card.component.html',
  styleUrls: ['./why-us-card.component.scss']
})
export class WhyUsCardComponent implements OnInit {
  @Input()
  card: card
  constructor() { }

  ngOnInit() {
  }

}

export interface card {
  id: number;
  icon: string;
  title: string;
  para: string;
}