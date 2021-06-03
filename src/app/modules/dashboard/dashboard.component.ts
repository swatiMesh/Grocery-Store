import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  byCourseArray = [
    { "courseName": "Fundamentals of UI/UX Design", "count": "15" },
    { "courseName": "Angular JS Scratch Cource", "count": "08" },
    { "courseName": "Bootstrap 4.0 Foundation", "count": "12" },
    { "courseName": "GitHub Basics", "count": "03" }
  ]
  recentTransactionsArray = [
    { "courseName": "Angular JS Scratch Cource", "invoiceId": "#8078", "price": "FREE", "date": "1 AUG 2020" },
    { "courseName": "Fundamentals of UI/UX Design", "invoiceId": "#8078", "price": "499.0", "date": "31 JULY 2020" },
    { "courseName": "Bootstrap 4.0 Foundation", "invoiceId": "#8078", "price": "FREE", "date": "1 AUG 2020" }
  ]


  constructor() { }

  ngOnInit() {
  }

}
