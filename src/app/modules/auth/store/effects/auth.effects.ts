import {Injectable, NgZone} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthStoreActions} from '../../enums/auth-store-actions.enum';
import {catchError, delay, map, switchMap, tap} from 'rxjs/operators';
import {clearFailedRequests, login, loginFailed, signUp, signUpFailed} from '../actions/auth.action';
import {UserModel} from '../../../shared/models/user.model';
import {of} from 'rxjs';
import {AuthStoreAction} from '../../models/auth-store-action.model';
import {Router} from '@angular/router';
import {AUTH_TOKEN} from '../../../shared/constants/local-storage.constant';

@Injectable()
export class AuthEffects {
  constructor(private _authService: AuthService,
              private _router: Router,
              private _ngZone: NgZone,
              private _actions$: Actions) {
  }

  @Effect()
  authLogin = this._actions$.pipe(
    ofType(AuthStoreActions.LOGIN_START),
    switchMap((data: AuthStoreAction) => {
      return this._authService.signIn(data.payload.email, data.payload.password)
        .pipe(
          map((res: UserModel) => login(res)),
          catchError(error => of(loginFailed(error.message))));
    })
  );

  @Effect()
  authSignUp = this._actions$.pipe(
    ofType(AuthStoreActions.SIGNUP_START),
    switchMap((data: AuthStoreAction) => {
      return this._authService.signUp(data.payload.email, data.payload.password, data.payload.username)
        .pipe(
          map((res: UserModel) => signUp(res)),
          catchError(error => of(signUpFailed(error.message)))
        );
    })
  );

  @Effect()
  authGoogle = this._actions$.pipe(
    ofType(AuthStoreActions.AUTHENTICATE_WITH_GOOGLE),
    switchMap(_ => {
      return this._authService.googleAuth().pipe(
        map(res => login(res)),
        catchError(error => {
          console.log(error);
          return of(loginFailed(error.message));
        })
      );
    })
  );

  @Effect()
  authFailedRequests = this._actions$.pipe(
    ofType(AuthStoreActions.LOGIN_FAILED),
    delay(4000),
    map(_ => clearFailedRequests())
  );

  @Effect({dispatch: false})
  authLoginSuccess = this._actions$.pipe(
    ofType(AuthStoreActions.LOGIN),
    tap((data: AuthStoreAction) => {
      localStorage.setItem(AUTH_TOKEN, data.payload.user.idToken);
      this._ngZone.run(_ => this._router.navigate(['dashboard']));
    })
  );

  @Effect({dispatch: false})
  authSignUpSuccess = this._actions$.pipe(
    ofType(AuthStoreActions.SIGNUP),
    tap(() => this._ngZone.run(_ => this._router.navigate(['auth/login'])))
  );

  @Effect({dispatch: false})
  authLogout = this._actions$.pipe(
    ofType(AuthStoreActions.LOGOUT),
    tap(_ => {
      localStorage.removeItem(AUTH_TOKEN);
      this._ngZone.run(_ => this._router.navigate(['/']));
    })
  )
}