import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule,
     MatTabsModule, MatTooltipModule, MatFormFieldModule, MatDatepickerModule, MatTableModule,  ],
  exports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, 
    MatTabsModule, MatTooltipModule, MatFormFieldModule, MatDatepickerModule, MatTableModule, ],
})
export class MaterialModule { }