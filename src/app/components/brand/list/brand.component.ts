import {Component} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import BrandDto from '../../../model/brand.class';
import {BrandService} from '../../../service/brand.service';

@Component({
  templateUrl: './brand.component.html'
})
export class BrandComponent {

  itemsObs: FirebaseListObservable<BrandDto[]>;

  constructor(private brandService: BrandService) {
    this.itemsObs = this.brandService.getAllOrdered();
  }

  delete($event, $key: string) {
    $event.preventDefault();
    this.brandService.delete($key);
  }
}
