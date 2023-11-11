import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
// data array*
// input tych danych do mniejszych komponentow

cards=[
  {
    id: 1,
    title: 'rose',
    para:'A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.'
  },
  {
    id: 2,
    title: 'dahlia',
    para:'Dahlias are perennial plants with tuberous roots, though they are grown as annuals in some regions with cold winters.'
  },
  {
    id: 3,
    title: 'orchid',
    para:'Orchids are plants that belong to the family Orchidaceae a diverse and widespread group of flowering plants with blooms that are often colourful .'
  },
  {
    id: 4,
    title: 'peony',
    para:'The peony or paeony is a flowering plant in the genus Paeonia the only genus in the family Paeoniaceae . Peonies are native to Asia.'
  },
  {
    id: 5,
    title: 'pink roses',
    para:'Pink roses are a symbol of tenderness. This bouquet of 15 pink flowers is the perfect choice when you want to express your feelings.'
  },
  {
    id: 6,
    title: 'sunflower',
    para:'The common sunflower (Helianthus annuus) is a species of large annual forb of the genus Helianthus. It is commonly grown as a crop for its edible oily seeds'
  },
]
  constructor() { }

  ngOnInit() {
  }

}
