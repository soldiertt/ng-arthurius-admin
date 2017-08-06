import {Component} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {ExceptionService} from '../../service/exception.service';

@Component({
  selector: 'arth-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  errorMessage: string;

  constructor(public authService: AuthService, private exceptionService: ExceptionService) {
    this.exceptionService.errorEvent.subscribe(msg => this.errorMessage = msg );
  }

  login() {
    this.authService.login();
  }

  logout($event) {
    $event.preventDefault();
    this.authService.logout();
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  getUser() {
    return this.authService.user;
  }

  closeAlert() {
    this.errorMessage = undefined;
  }
}
