import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginsuccessPage } from '../pages/loginsuccess/loginsuccess';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginsuccessPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginsuccessPage
  ],
  providers: []
})
export class AppModule {}
