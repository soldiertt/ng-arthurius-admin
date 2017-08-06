import { Component } from '@angular/core';
import {ProductService} from './service/product.service';
import ProductDto from './model/product.class';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'arth-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
