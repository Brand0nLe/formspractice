import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformComponent } from '../userform/userform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserformComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UserformComponent],
})
export class ViewsModule {}
