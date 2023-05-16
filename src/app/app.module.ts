import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {  MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ApplyComponent } from './apply/apply.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { LoginComponent } from './login/login.component';
import { BusinessComponent } from './business/business.component';
import { VehicleloanComponent } from './vehicleloan/vehicleloan.component';
    


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonalloanComponent,
    HomeComponent,
    PopUpComponent,
    ApplyComponent,
    HomeloanComponent,
    LoginComponent,
    BusinessComponent,
    VehicleloanComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatInputModule,
     MatFormFieldModule,
     ReactiveFormsModule,
     FormsModule,
     BrowserAnimationsModule,
     MatButtonModule,
     MatDialogModule,
     MatCheckboxModule,
     MatSelectModule,
     
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
