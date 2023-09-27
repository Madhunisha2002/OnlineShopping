import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  dressDetails = [
    {
      id:1,
      touch:"tops",
      Details:"CROP TOPS.",
      Price:899,
      Img:"/assets/img/crop.jpg"
    },
    {
      id:2,
      touch:"pants",
      Details:"trousers",
      Price:999,
      Img:"/assets/img/pants.jpg"
    },
    {
      id:3,
      touch:"western wear",
      Details:"bodycon dress",
      Price:799,
      Img:"/assets/img/bodycon.jpg"
    },
    {
      id:4,
      touch:"Ethnics",
      Details:"lehenga",
      Price:999,
      Img:"/assets/img/l.jpg"
    },
    {
      id:5,
      touch:"South indian",
      Details:"saree",
      Price:2999,
      Img:"/assets/img/saree.jpeg"
    },
    {
      id:6,
      touch:"Beach wear",
      Details:"tops",
      Price:899,
      Img:"/assets/img/hd.jpg"
    },
    {
      id:7,
      touch:"Formal wear",
      Details:"coat suit",
      Price:799,
      Img:"/assets/img/3.webp"
    },
    {
      id:8,
      touch:"Smock-frock",
      Details:"frock",
      Price:399,
      Img:"/assets/img/web.webp"
    },
    {
      id:9,
      touch:"Salwar",
      Details:"gujarati salwar",
      Price:699,
      Img:"/assets/img/salwar.jpg"
    },
    {
      id:10,
      touch:"Maxi-dresses",
      Details:"cocktail dress",
      Price:599,
      Img:"/assets/img/cock.jpg"
    },
    {
      id:11,
      touch:"Maxi-dresses",
      Details:"shift dress",
      Price:899,
      Img:"/assets/img/23.webp"
    },
    {
      id:12,
      touch:"Maxi-dresses",
      Details:"strapless dress",
      Price:499,
      Img:"/assets/img/j.jpg"
    },
    {
      id:13,
      touch:"Treasurie",
      Details:"peasant dress",
      Price:899,
      Img:"/assets/img/peas.webp"
    },
    {
      id:14,
      touch:"Treasurie",
      Details:"peplum dress",
      Price:999,
      Img:"/assets/img/pep.webp"
    },
    {
      id:15,
      touch:"Treasurie",
      Details:"sundress",
      Price:299,
      Img:"/assets/img/sun.jpg"
    }

  ]
}