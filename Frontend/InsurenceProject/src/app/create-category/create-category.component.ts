import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category:Category=new Category();

  constructor(private categoryService:CategoryService,private router:Router) { }

  ngOnInit(): void {
  }
addCategoryData(){
  this.categoryService.addInsuranceCategory(this.category).subscribe(data=>{
    alert(" successful");
    this.gotoListOfCategory();
  },error=>alert("successful"))

}
gotoListOfCategory(){
  this.router.navigate(['/categories']);
  
}

}
