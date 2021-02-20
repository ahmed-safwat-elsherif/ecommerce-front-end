import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  panelOpenState = false;
  allData = [
    { _id:"123",
      product_name : "product 1", 
      status:"Sale",
      current_price:"100", 
      old_price:"5", 
      rating:"2", 
      isFavorite:true,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 2", 
      status:"",
      current_price:"50", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 3", 
      status:"Sale",
      current_price:"75", 
      old_price:"5", 
      rating:"2", 
      isFavorite:true,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 4", 
      status:"",
      current_price:"35", 
      old_price:"5", 
      rating:"2", 
      isFavorite:true,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 5", 
      status:"Sale",
      current_price:"43", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 5", 
      status:"Sale",
      current_price:"15", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 5", 
      status:"Sale",
      current_price:"86", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 5", 
      status:"Sale",
      current_price:"85", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    }
  ];
  obj = [
    { _id:"123",
      product_name : "product 1", 
      status:"Sale",
      current_price:"100", 
      old_price:"5", 
      rating:"2", 
      isFavorite:true,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 2", 
      status:"",
      current_price:"50", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 3", 
      status:"Sale",
      current_price:"75", 
      old_price:"5", 
      rating:"2", 
      isFavorite:true,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 4", 
      status:"",
      current_price:"35", 
      old_price:"5", 
      rating:"2", 
      isFavorite:true,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 5", 
      status:"Sale",
      current_price:"43", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 5", 
      status:"Sale",
      current_price:"15", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 5", 
      status:"Sale",
      current_price:"86", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    },
    { _id:"123",
      product_name : "product 5", 
      status:"Sale",
      current_price:"85", 
      old_price:"5", 
      rating:"2", 
      isFavorite:false,
      imgSrc : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
    }
  ]
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  slider(event){
    console.log(event.value)
    this.obj = this.allData.filter((product)=>{
      return Number(product.current_price) <= Number(event.value)
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
