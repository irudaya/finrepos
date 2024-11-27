 
import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createAssetChart();
    this.createTrendChart();
  }

  createAssetChart() {
    new Chart('assetChart', {
      type: 'doughnut',
      data: {
        labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash'],
        datasets: [
          {
            data: [40, 30, 20, 10],
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  createTrendChart() {
    new Chart('trendChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Market Trends',
            data: [100, 120, 130, 110, 140, 150],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });
  }
}