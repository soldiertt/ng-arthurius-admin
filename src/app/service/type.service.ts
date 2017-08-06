import {Injectable} from '@angular/core';
import {BaseAbstractService} from './base-abstract.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class TypeService extends BaseAbstractService {

  constructor(protected db: AngularFireDatabase) {
    super('/types', db);
  }

  getAllOrdered(): FirebaseListObservable<any[]> {
    this.itemsDtoObs = this.db.list(this.context, {
      query: {
        orderByChild: 'name'
      }
    });
    return this.itemsDtoObs;
  }
}
