import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Progressbar } from './progressbar';

@NgModule({
  declarations: [
    Progressbar,
  ],
  imports: [
    IonicPageModule.forChild(Progressbar),
  ],
})
export class ProgressbarModule {}
