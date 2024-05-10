import { EventEmitter, Injectable, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() changed = new EventEmitter();

  is_logged_in: boolean = false;

  constructor(
    private service: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) {}

  
  login(email: string, password: string) {
    this.service.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true'), this.router.navigate(['/home']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  register(email: string, password: string){
    this.service.createUserWithEmailAndPassword(email,password).then (
      () =>{
        this.router.navigate(['/home'])
      }, err =>{
        alert(err.message);
        this.router.navigate(['/register'])
      }
    )
  }

  logout(){
    this.service.signOut().then(()=>
    {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err =>{
      alert(err.message);
    })
  }


}
