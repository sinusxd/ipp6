import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-get-record',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-record.component.html',
  styleUrls: ['./get-record.component.scss']
})
export class GetRecordComponent {
  recordId = '';
  record: any;

  constructor(private recordService: RecordService) {}

  getRecord() {
    this.recordService.getRecordById(this.recordId)
      .subscribe(response => {
        this.record = response;
      });
  }
}
