import { Component } from '@angular/core';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { GetRecordComponent } from './components/get-record/get-record.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddRecordComponent, GetRecordComponent],
  template: `
    <h1>Record Management</h1>
    <app-add-record></app-add-record>
    <app-get-record></app-get-record>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
