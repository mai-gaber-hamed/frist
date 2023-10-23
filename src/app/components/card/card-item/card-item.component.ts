import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JsonservicesService } from 'src/app/services/jsonservices.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  /**
   *
   */
  constructor(public service:JsonservicesService, public router:Router) {}
    
  
  @Input() prod2:any=''
  Quantity:string|number=''
  btn:string=''
  x:boolean=true
  ngOnInit(): void {
  this.Quantity=this.prod2.quantity
 

  if (this.Quantity===0) {
    this.Quantity='No Product Avaliable'
    this.btn='Sold Out'

  }
  else if (this.Quantity===1){
    this.Quantity='Only One Product'
    this.btn='Buy Now'
  } 
  else{
    this.Quantity='Quantity: '+this.Quantity
     this.btn='Buy Now'
   }   
    
  }
  @Output()delEvent =new EventEmitter()

del(){ this.delEvent.emit(this.prod2.id)

}


}
