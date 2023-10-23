import { Component } from '@angular/core';
import { JsonservicesService } from 'src/app/services/jsonservices.service';
@Component({
    selector:'app-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.css']
})
export class CardComponent
{
arr:any=''
id:any=''
constructor(public serve:JsonservicesService){}
ngOnInit() {
   this.serve.getall().subscribe({
    next:(response)=>{
this.arr=response        
    }
   })
    
}

del(e:Event){
    this.id=e;
   console.log(`del ${e}`);
  this.serve.remove(this.id).subscribe({
    next:()=>{ this.arr=this.arr.filter((product:any)=>product.id!=this.id)}
  })  
}


}