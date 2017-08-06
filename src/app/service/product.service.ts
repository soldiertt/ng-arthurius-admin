import {Injectable} from '@angular/core';
import {BaseAbstractService} from './base-abstract.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import ProductDto from '../model/product.class';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProductService extends BaseAbstractService {

  filterSubject: Subject<string> = new Subject();

  constructor(protected db: AngularFireDatabase) {
    super('/products', db);
  }

  findBy(field: string): FirebaseListObservable<ProductDto[]> {
    this.itemsDtoObs = this.db.list(this.context, {
      query: {
        orderByChild: field,
        equalTo: this.filterSubject
      }
    });
    return this.itemsDtoObs;
  }
}
