import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule} from '@angular/forms';
import { FormOutputComponent } from './form-output/form-output.component'
import { RouterModule, Routes} from '@angular/router'


const routes : Routes = [
  {path : 'form', component: FormComponent},
  {path : 'form-output', component: FormOutputComponent},
  {path : '', redirectTo: '/form', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormOutputComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
