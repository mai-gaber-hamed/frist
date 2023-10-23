import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class NavbarComponent
{
    slider:boolean=true;
    products:boolean=true;

    @Output() ShowSliderEvent =new EventEmitter();
    @Output() ShowProductsEvent =new EventEmitter();

    
    ShowSlider()
    {
        this.ShowSliderEvent.emit(this.slider)
    }
    ShowProducts()
    {
        this.ShowProductsEvent.emit(this.products)
    }

}
