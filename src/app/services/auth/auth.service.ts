import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

enum AuthRole {
  NOT_SIGNED = 0,
  SIGNED_USER = 1,
  SIGNED_ADMIN = 2,
}

interface EmailAvailable {
  available: boolean
}

interface formValue {
  email: string;
  password: string;
  passwordConfirmation: string
}
interface SignupResponse {
  success: boolean;
}


interface SingedInResponse {
  authenticated: boolean;
}
interface SignInValue {
  email: string;
  password: string
}

interface LoginResponse {
  access_token: string;
  role: number;
  success: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedIn$ = new BehaviorSubject(false)

  constructor(private http: HttpClient) { }

  emailAvailable(email: string) {
    return this.http.post<EmailAvailable>('https://api.angular-email.com/auth/username',
      { username: email })
  }


  isSingIn() {
    return this.http.get<SingedInResponse>('https://api.angular-email.com/auth/signedin', { withCredentials: true })
      .pipe(
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated)
        })
      )
  }

  signOut() {
    return this.http.post('/api/auth/signout', {})
      .pipe(
        tap(() => {
          this.cleanSession();
        })
      )
  }

  signIn(value: SignInValue) {
    return this.http.post<LoginResponse>('/api/auth/signin', value)
      .pipe(
        tap((response) => {
          if (response.success) {
            localStorage.setItem('token', response.access_token)
            localStorage.setItem('role', response.role.toString())
          };
        })
      )
  }


  signUp(formValue: formValue) {
    return this.http.post<SignupResponse>('/api/auth/signup', formValue)
  }

  isSigned() {
    // !! zamienia wynik w wartość logiczną
    return !!localStorage.getItem('token')
  }

  isSignedAsAdmin() {
    return localStorage.getItem('role') === AuthRole.SIGNED_ADMIN.toString()
  }

  isSignedAsUser(): boolean {
    return localStorage.getItem('role') === AuthRole.SIGNED_USER.toString();
  }

  signedAsUser() {
    return this.http.get<boolean>('/api/auth/signedin', this.getAuthOptions())
  }

  signedAsAdmin() {
    return this.http.get<boolean>('/api/auth/signedin-admin', this.getAuthOptions())
  }

  getAuthOptions() {
    return {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  cleanSession(): void {
    localStorage.clear();
  }
}
