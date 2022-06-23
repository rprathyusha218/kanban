import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [WelcomeComponent,HeaderComponent,SearchPipe]
})
export class SharedModule { }
