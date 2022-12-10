// Also see: https://github.com/angular/material2/blob/master/CHANGELOG.md#materialmodule

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule
    ]
})
export class MaterialModule { }
