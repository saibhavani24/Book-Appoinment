import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  constructor(
    private http: HttpClient
  ) { }
  timeSlot() {
    return this.http.get('');
  }
}
