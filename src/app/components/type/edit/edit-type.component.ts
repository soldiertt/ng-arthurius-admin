import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseObjectObservable} from 'angularfire2/database';
import {TypeService} from '../../../service/type.service';
import TypeDto from '../../../model/type.class';

@Component({
  templateUrl: './edit-type.component.html'
})
export class EditTypeComponent {

  $key: string;
  itemObs: FirebaseObjectObservable<TypeDto>;
  item: TypeDto;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private typeService: TypeService) {
    this.$key = this.route.snapshot.params['id'];
    if (this.$key) {
      this.itemObs = this.typeService.get(this.$key);
      this.itemObs.subscribe(item => this.item = item);
    } else {
      this.item = new TypeDto();
    }
  }

  save(valid: boolean) {
    if (valid) {
      if (this.item.$key) {
        this.typeService.update(this.item.$key, this.item);
      } else {
        this.typeService.create(this.item);
      }
      this.router.navigate(['/types']);
    }
  }
}
