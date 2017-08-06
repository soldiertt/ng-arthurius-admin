import {Injectable} from '@angular/core';
import {BaseAbstractService} from './base-abstract.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {ExceptionService} from './exception.service';

@Injectable()
export class SlideService extends BaseAbstractService {

  constructor(protected db: AngularFireDatabase, protected exceptionService: ExceptionService) {
    super('/slides', db, exceptionService);
  }

}
