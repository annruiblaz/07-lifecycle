import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() { 
    console.log('Estoy en el constructor');
  }

  ngOnInit(): void {
    console.log('Estoy en ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('Estoy en ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('Estoy en ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Estoy en ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Estoy en ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Estoy en ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Estoy en ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Estoy en ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice++;
  }

}
