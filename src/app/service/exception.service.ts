import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ExceptionService {

  errorEvent: EventEmitter<string> = new EventEmitter();

  pushError(msg: string) {
    this.errorEvent.emit(msg);
  }

}
