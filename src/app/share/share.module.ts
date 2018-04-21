import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LayoutComponent} from './layout/layout.component';
import {CKEditorModule} from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CKEditorModule
  ],
  declarations: [LayoutComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    LayoutComponent,
    CKEditorModule
  ]
})
export class ShareModule {
}
