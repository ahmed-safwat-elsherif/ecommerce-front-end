import { Component, OnInit, Input } from '@angular/core';
import { faStar, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  faStar = faStar;
  faCartPlus = faCartPlus;
  faHeart = faHeart;
  heartIcon = "#CDCDCD";
  @Input() objectOfInputs:{
    product_name : string, 
    current_price:string, 
    old_price:string, 
    rating:string, 
    imgSrc:string,
    status:string,
    _id:string;
    isFavorite:boolean;
  };
  _id:string;
  imgSrc:string;
  star;
  current_price:string;
  old_price:string;
  product_name:string;
  status:string;
  classOfStatus:string;
  options = "options-disappear";
  fav = "fav-disappear";
  appear(){
    this.options = "options-appear";
    this.fav = "fav-appear";
  }
  disappear(){
    this.options = "options-disappear";
    this.fav = "fav-disappear";
  }
  changeHeartColor(){
    // we will pass the id to the back-end later
    if(!this.objectOfInputs.isFavorite){
      this.heartIcon = "#F65B5F";
      console.log("add to fav")
    }
    
  }
  constructor() { }
  ngOnInit(): void {
    this.star =  getRating(Number(this.objectOfInputs.rating));
    this.status = (this.objectOfInputs.status != "")? "Sale": "";
    this.classOfStatus = (this.objectOfInputs.status != "")? "badge badge-danger py-3 p-2 rounded-circle": "";
    this.old_price = this.objectOfInputs.old_price;
    this.product_name = this.objectOfInputs.product_name;
    this.imgSrc = this.objectOfInputs.imgSrc;
    this.current_price = this.objectOfInputs.current_price;
    this._id = this.objectOfInputs._id;
    this.heartIcon = (this.objectOfInputs.isFavorite)? "#F65B5F":"#CDCDCD";
  }

}

function getRating(rating:number) {
  let arr = ["grey","grey","grey","grey","grey"]
  for(let i = 0; i < rating; i++){
    arr[i] = "#FFC622";
  }
  return arr
}