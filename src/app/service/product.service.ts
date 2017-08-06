import {Injectable} from '@angular/core';
import {BaseAbstractService} from './base-abstract.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import ProductDto from '../model/product.class';
import {Subject} from 'rxjs/Subject';
import {ExceptionService} from './exception.service';

@Injectable()
export class ProductService extends BaseAbstractService {

  filterSubject: Subject<string> = new Subject();

  constructor(protected db: AngularFireDatabase, protected exceptionService: ExceptionService) {
    super('/products', db, exceptionService);
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
