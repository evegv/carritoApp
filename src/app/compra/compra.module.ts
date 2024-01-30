import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraPageRoutingModule } from './compra-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompraPage } from './compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CompraPage]
})
export class CompraPageModule {}
