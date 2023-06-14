import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformComponent } from '../userform/userform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [UserformComponent],
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatFormFieldModule],
  exports: [UserformComponent],
})
export class ViewsModule {}
