import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './user.router';
import { HomeComponent } from './home/home.component';
import {HomeComponentService} from './home/home.component.service';
import {HttpClientModule} from '@angular/common/http';
import { DisplayDataComponent } from './display-data/display-data.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes), HttpClientModule
  ],
  providers: [HomeComponentService],
  exports: [LoginComponent, HomeComponent, VideoPlayerComponent, DisplayDataComponent],
  declarations: [LoginComponent, HomeComponent, DisplayDataComponent, VideoPlayerComponent]
})
export class UserModule { }
