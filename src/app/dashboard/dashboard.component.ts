import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { first }  from 'rxjs/operators';
import { Chart } from 'chart.js';
import 'chart.piecelabel.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private router : Router, private loginService : LoginService) { Chart : Chart; }
	profile =  {};
	charData = {
	  "facilities": [
		{
		  "facilityID": 240,
		  "facilityName": "FacilityChicago",
		  "contentUsage": {
			"games": 10,
			"movies": 20,
			"music": 30,
			"other": 40
		  },
		  "monetaryUsage": {
			"points": 130,
			"paytelFunds": 251
		  },
		  "totalMinutes": 340
		},
		{
		  "facilityID": 246,
		  "facilityName": "GreensBoro",
		  "contentUsage": {
			"games": 10,
			"movies": 20,
			"music": 30,
			"other": 40
		  },
		  "monetaryUsage": {
			"points": 130,
			"paytelFunds": 251
		  },
		  "totalMinutes": 340
		}
	  ],
	  "contentUsage": {
		"games": 30,
		"movies": 20,
		"music": 15,
		"other": 35
	  },
	  "redemption": {
		"points": 0,
		"paytelFunds": 44.6
	  },
	  "totalMinutes": {
		"games": 200,
		"movies": 100,
		"music": 150,
		"other": 350
	  }
	}
	
	
	
	public pieChartLabels = Object.keys(this.charData.contentUsage);//['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
	public pieChartData = this.pieChartLabels.map(item => this.charData.contentUsage[item]);//[120, 150, 180, 90];
	public pieChartType = 'pie';
	public chartOptions = {
		pieceLabel: {
		  render: function (args) {
			const label = args.label,
				  value = args.value;
				  console.log(args)
			return label + ' : ' + value;
		  }
		}
	}
	
	
	public chartType: string = 'doughnut';
	public chartLabels: Array<string> = ['January', 'February', 'March'];
	public chartData: Array<number> = [1, 1, 1];

	public chartOptions1: any = {
	pieceLabel: {
	  render: function (args) {
		const label = args.label,
			  value = args.value;
		return label + ': ' + value;
	  }
	}
	}
  

  ngOnInit() {
	
  }
  
  initChart(){
	
  }
  
  
}
