import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {ExceptionService} from './exception.service';

export abstract class BaseAbstractService {

  context: string;
  itemDtoObs: FirebaseObjectObservable<any>;
  itemsDtoObs: FirebaseListObservable<any[]>;

  constructor(context: string, protected db: AngularFireDatabase, protected exceptionService: ExceptionService) {
    this.context = context;
    this.db = db;
    this.itemsDtoObs = this.db.list(this.context);
  }

  getAll(): FirebaseListObservable<any[]> {
    return this.itemsDtoObs;
  }

  get(id: string): FirebaseObjectObservable<any> {
    this.itemDtoObs = this.db.object(this.context + '/' + id);
    return this.itemDtoObs;
  }

  update(id: string, item: any): void {
    this.itemsDtoObs.update(id, item).catch(err => {
      this.exceptionService.pushError(err.message);
    });
  }

  delete(id: string): void {
    this.itemsDtoObs.remove(id).catch(err => {
      this.exceptionService.pushError(err.message);
    });
  }

  create(item: any): void {
    this.itemsDtoObs.push(item).catch(err => {
      this.exceptionService.pushError(err.message);
    });
  }
}
