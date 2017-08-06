import {Injectable} from '@angular/core';
import {BaseAbstractService} from './base-abstract.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {ExceptionService} from './exception.service';

@Injectable()
export class BrandService extends BaseAbstractService {

  constructor(protected db: AngularFireDatabase, protected exceptionService: ExceptionService) {
    super('/brands', db, exceptionService);
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
