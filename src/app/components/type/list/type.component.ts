import {Component} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import TypeDto from '../../../model/type.class';
import {TypeService} from '../../../service/type.service';

@Component({
  templateUrl: './type.component.html'
})
export class TypeComponent {

  itemsObs: FirebaseListObservable<TypeDto[]>;

  constructor(private typeService: TypeService) {
    this.itemsObs = this.typeService.getAllOrdered();
  }

  delete($event, $key: string) {
    $event.preventDefault();
    this.typeService.delete($key);
  }

}
