import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories-ad',
  templateUrl: './categories-ad.component.html',
  styleUrls: ['./categories-ad.component.css']
})
export class CategoriesAdComponent implements OnInit {

  categoryAddForm = new FormGroup({
    name: new FormControl(''),
    thumbnail: new FormControl(''),
    image: new FormControl(''),
    active: new FormControl('false'),

  })

  constructor( private categoriesService: CategoriesService,
    private router:Router) { }

  ngOnInit() {
    
  }

addCategory(value){
  this.categoriesService.addCategory(value).subscribe(response=>{
    this.router.navigateByUrl('/admin/categories')
  })
}

}
