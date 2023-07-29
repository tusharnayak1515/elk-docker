import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private backendUrl = 'http://localhost:3000/api/logs';

  constructor(private http: HttpClient) {}

  log(message: string) {
    this.http.post(this.backendUrl, { message }).subscribe(
      () => console.log('Log sent to server.'),
      (error) => console.error('Error sending log to server:', error)
    );
  }
}
