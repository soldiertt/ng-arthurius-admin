import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseObjectObservable} from 'angularfire2/database';
import SlideDto from '../../../model/slide.class';
import {SlideService} from '../../../service/slide.service';

@Component({
  templateUrl: './edit-slide.component.html'
})
export class EditSlideComponent {

  $key: string;
  itemObs: FirebaseObjectObservable<SlideDto>;
  item: SlideDto;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private slideService: SlideService) {
    this.$key = this.route.snapshot.params['id'];
    if (this.$key) {
      this.itemObs = this.slideService.get(this.$key);
      this.itemObs.subscribe(item => this.item = item);
    } else {
      this.item = new SlideDto();
    }
  }

  save(valid: boolean) {
    if (valid) {
      if (this.item.$key) {
        this.slideService.update(this.item.$key, this.item);
      } else {
        this.slideService.create(this.item);
      }
      this.router.navigate(['/slides']);
    }
  }
}
