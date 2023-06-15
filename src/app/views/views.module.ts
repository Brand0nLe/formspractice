import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformComponent } from '../userform/userform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [UserformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  exports: [UserformComponent],
})
export class ViewsModule {}
