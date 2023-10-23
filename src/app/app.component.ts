import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frist';
Slider:boolean=false;
Product:boolean=false;
  ShowSlider(e:any){
this.Slider=e;
this.Product=false;
  }
  ShowProducts(e:any){
    this.Product=e;
    this.Slider=false;
      }
}
