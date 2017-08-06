import {Component} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import SlideDto from '../../../model/slide.class';
import {SlideService} from '../../../service/slide.service';

@Component({
  templateUrl: './slide.component.html'
})
export class SlideComponent {

  itemsObs: FirebaseListObservable<SlideDto[]>;

  constructor(private slideService: SlideService) {
    this.itemsObs = this.slideService.getAll();
  }

  delete($event, $key: string) {
    $event.preventDefault();
    this.slideService.delete($key);
  }
}
