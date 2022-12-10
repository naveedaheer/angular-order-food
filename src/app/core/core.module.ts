import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
/**
 * Angular Material Components
 */
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    SharedModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    HomeModule
  ],
  exports: [
    NavigationBarComponent,
    SharedModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}