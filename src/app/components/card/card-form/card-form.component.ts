import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonservicesService } from 'src/app/services/jsonservices.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  name:string="";
  price:number=0;
  Quantity:number|string='';
  image:string='logo.png';
  id:number=0;
  product:any;

constructor(public services:JsonservicesService ,public router:Router ,public url:ActivatedRoute){

}
ngOnInit(){
 this.url.params.subscribe({
  next:(params)=> {
    this.id=params['id']
  }
 })
 if(this.id!=0){
  this.services.getbyid(this.id).subscribe({
    next:(response)=>{
  this.product=response; 
  this.name=this.product.name
  this.image=this.product.image
  this.price=this.product.price
  this.Quantity=this.product.quantity
    }
  })
 }
  
 
}


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.image = file.name;      
  }


  createproduct() {
  let newProduct = {
    name: this.name,
    image: this.image,
    price: this.price,
    quantity: this.Quantity,
  };

  this.services.addnew(newProduct).subscribe({
    next:()=>{ }
  })
    this.router.navigate(['/products']);
}


  editProduct(){
    let editedProduct = {
      id:this.id,
      name: this.name,
      image: this.image,
      price: this.price,
      quantity: this.Quantity,
    };
    this.services.edit(this.id,editedProduct).subscribe({
      next:()=>{}
    })
    this.router.navigate(['/products']);
  }

 
 

}
