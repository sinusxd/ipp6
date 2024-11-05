import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-add-record',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {
  title = '';
  content = '';

  constructor(private recordService: RecordService) {}

  addRecord() {
    this.recordService.addRecord({ title: this.title, content: this.content })
      .subscribe(response => {
        console.log('Record added:', response);
      });
  }
}
