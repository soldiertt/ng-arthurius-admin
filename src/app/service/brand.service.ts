import {Injectable} from '@angular/core';
import {BaseAbstractService} from './base-abstract.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class BrandService extends BaseAbstractService {

  constructor(protected db: AngularFireDatabase) {
    super('/brands', db);
  }

}
