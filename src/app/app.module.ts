import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importez BrowserAnimationsModule
import { AppComponent } from './app.component';
import { Routes ,RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatTableModule } from '@angular/material/table';
import { AuthModule } from './Auth/auth-module/auth.module';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  
];
const firebaseConfig = {
  
};

@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
   
  ],
  exports: [RouterModule],
  providers: [ AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}