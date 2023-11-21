import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule } from "@angular/forms"; // Template driven Form validation (validate in html)
import { ReactiveFormsModule } from "@angular/forms";
import {RouterLink} from "@angular/router";
import {HomeModule} from "../home/home.module"; // ReactiveFormsModule Form Validation in TS Class

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    HomeModule,
  ]
})
export class ReservationModule { }
