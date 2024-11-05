import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private apiUrl = 'http://http://89.169.166.66:8080/api/records';

  constructor(private http: HttpClient) {}

  addRecord(record: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, record);
  }

  getRecordById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
