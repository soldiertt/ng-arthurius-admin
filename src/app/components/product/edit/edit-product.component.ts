import { Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import ProductDto from '../../../model/product.class';
import {ProductService} from '../../../service/product.service';
import {FirebaseObjectObservable} from 'angularfire2/database';
import {TypeService} from '../../../service/type.service';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent {

  $key: string;
  itemObs: FirebaseObjectObservable<ProductDto>;
  item: ProductDto;
  types: string[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private typeService: TypeService) {
    this.$key = this.route.snapshot.params['id'];
    if (this.$key) {
      this.itemObs = this.productService.get(this.$key);
      this.itemObs.subscribe(item => this.item = item);
    } else {
      this.item = new ProductDto();
    }
    this.typeService.getAll().subscribe(types => {
      this.types = types.map(type => type.name);
    });
  }

  save(ngForm: NgForm) {
    if (ngForm.valid) {
      if (this.item.$key) {
        this.productService.update(this.item.$key, this.item);
      } else {
        this.productService.create(this.item);
      }
      this.router.navigate(['/products']);
    }
  }
}
