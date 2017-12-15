import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	chart: any;

	constructor() { }

	ngOnInit() {
		this.chart = new Chart('canvas', {
			type: 'bar',
			data: {
				labels: ["2", "4", "6", "8", "10", "12", "14", "16"],
				datasets: [{
					label: 'Sales per day',
					data: [12, 19, 3, 5, 2, 3, 4, 6],
					backgroundColor: [
						'rgba(255, 99, 132, .9)',
						'rgba(54, 162, 235, .9)',
						'rgba(255, 206, 86, .9)',
						'rgba(75, 192, 192, .9)',
						'rgba(153, 102, 255, .9)',
						'rgba(255, 159, 64, .9)',
						'rgba(54, 162, 235, .9)',
						'rgba(255, 99, 132, .9)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 99, 132, .9)'
					],
					borderWidth: 3
				}]
			},
			options: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
            }	
		});
	}
}
