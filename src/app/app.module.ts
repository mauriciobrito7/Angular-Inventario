import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { ShellComponent } from './core/shell/shell.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAjh3khnudY3_L_egDbauO06yOL9mCfXbk",
    authDomain: "businessapp-e8c0b.firebaseapp.com",
    databaseURL: "https://businessapp-e8c0b.firebaseio.com",
    projectId: "businessapp-e8c0b",
    storageBucket: "businessapp-e8c0b.appspot.com",
    messagingSenderId: "672216814772"
}

@NgModule({
  declarations: [
 ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
