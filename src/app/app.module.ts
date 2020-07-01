import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemService} from './services/item.service'
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ThemesComponent } from './themes/themes.component';
import { MainComponent } from './main/main.component';
import { FormmanagerComponent } from './formmanager/formmanager.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
// import { EditformComponent } from './editform/editform.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    ProductComponent,
    HeaderComponent,
    ThemesComponent,
    MainComponent,
    FormmanagerComponent,
    LoginComponent,
    RegisterComponent,
    MainlayoutComponent,
    
    // EditformComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
