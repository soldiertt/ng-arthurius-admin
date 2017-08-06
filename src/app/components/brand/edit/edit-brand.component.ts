import {Component} from '@angular/core';
import {Router} from '@angular/router';
import BrandDto from '../../../model/brand.class';
import {BrandService} from '../../../service/brand.service';

@Component({
  templateUrl: './edit-brand.component.html'
})
export class EditBrandComponent {

  $key: string;
  item: BrandDto;

  constructor(private router: Router,
              private brandService: BrandService) {
    this.item = new BrandDto();
  }

  save(valid: boolean) {
    if (valid) {
      this.brandService.create(this.item);
      this.router.navigate(['/brands']);
    }
  }
}
