import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { DeletecategoryService } from '../deletecategory.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  router: any;

  constructor(private route:Router,private categoryService:CategoryService,private http:HttpClient,private deletecategoryservice: DeletecategoryService) { }
  _url = 'http://localhost:9091/api/v1/categories';
  categories:Category[]=[];

  ngOnInit() {
    this.categoryService.getInsuranceCategory().subscribe(result=>this.categories=result);


  
    }
    deleteCategory(category:any){
      alert("delete Successful");
      this.deletecategoryservice.deleteCategory(category.category).subscribe(
        (resp) => {
  
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  

  }


