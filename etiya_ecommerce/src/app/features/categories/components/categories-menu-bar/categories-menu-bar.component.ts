
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories/categories.service';


@Component({
  selector: 'app-categories-menu-bar',
  templateUrl: './categories-menu-bar.component.html',
  styleUrls: ['./categories-menu-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CategoriesMenuBarComponent implements OnInit {
  categories!:Category[];
  items!:MegaMenuItem[];

  constructor( private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
    this.configureItems();
  }

  getCategories(){
    this.categoriesService.getList().subscribe(response =>{
      this.categories=response;
      // console.debug('', this.categories);
      this.configureItems();
    })
  }


  configureItems(){
    this.items=this.categories.map(category=>{
//  /categories/1  route params
//  /categories?category=1 query Params

      return{
        label:category.name,
        routerLink:[''],
        queryParams: { categoryId: category.id},
    };
  })
  this.items.unshift({
    label:'All',
    routerLink:[''],

  })
  
  }
}
