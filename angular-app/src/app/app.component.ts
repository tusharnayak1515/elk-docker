import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor(private logService: LogService) { }
  ngOnInit() {
    this.logService.log('This is a trace message');
    this.logService.log('This is a debug message');
    this.logService.log('This is an info message');
    this.logService.log('This is a warning message');
    this.logService.log('This is an error message');
  }
}
