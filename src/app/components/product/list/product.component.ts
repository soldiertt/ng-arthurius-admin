import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import ProductDto from '../../../model/product.class';
import { FirebaseListObservable } from 'angularfire2/database';
import {TypeService} from '../../../service/type.service';
import {BrandService} from '../../../service/brand.service';

@Component({
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  itemsObs: FirebaseListObservable<ProductDto[]>;
  types: string[] = [];
  brands: string[] = [];
  typeFilter: string = '';
  brandFilter: string = '';

  constructor(private productService: ProductService,
              private typeService: TypeService,
              private brandService: BrandService) { }

  ngOnInit() {
    this.itemsObs = this.productService.findBy(null);
    setTimeout(() => {
      this.productService.filterSubject.next(null);
    }, 10);
    this.typeService.getAllOrdered().subscribe(types => {
      this.types = types.map(type => type.name);
    });
    this.brandService.getAllOrdered().subscribe(brands => {
      this.brands = brands.map(brand => brand.name);
    });
  }

  delete($event, $key: string) {
    $event.preventDefault();
    this.productService.delete($key);
  }

  filter() {
    const filters: any = this._getFilterField();
    this.itemsObs = this.productService.findBy(filters.filterField);
    setTimeout(() => {
      this.productService.filterSubject.next(filters.filterValue);
    }, 10);
  }

  private _getFilterField(): any {
    let filterField: string;
    let filterValue: string;
    if (this.typeFilter !== '') {
      if (this.brandFilter !== '') {
        filterField = 'type_brand';
        filterValue = this.typeFilter + '_' + this.brandFilter;
      } else {
        filterField = 'type';
        filterValue = this.typeFilter;
      }
    } else {
      if (this.brandFilter !== '') {
        filterField = 'brand';
        filterValue = this.brandFilter;
      } else {
        filterField = null;
        filterValue = null;
      }
    }
    return {filterField, filterValue};
  }
}
