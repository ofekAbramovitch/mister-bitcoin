import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Chart } from 'chart.js';
import { Value } from 'src/app/models/graph.model';

@Component({
  selector: 'market-price-chart',
  templateUrl: './market-price-chart.component.html',
  styleUrls: ['./market-price-chart.component.scss']
})
export class MarketPriceChartComponent implements OnInit {

  @Input() prices!: Data

  async ngOnInit() {
    let prices = this.prices['values'].splice(this.prices['values'].length - 30)
    var marketPrice = new Chart("market-price", {
      type: 'line',
      data: {
        labels: this.getDates(prices),
        datasets: [{
          label: 'Market price in the last 30 days',
          data: this.getData(prices),
          tension: 0.1
        }]
      }
    })
  }

  getDates(values: Value[]) {
    return values.map(value => {
      const date = new Date(value.x * 1000)
      return (date.getMonth() + 1) + '-' + (date.getDate() + 1)
    })
  }
  getData(values: Value[]) {
    return values.map(value => value.y)
  }
}
