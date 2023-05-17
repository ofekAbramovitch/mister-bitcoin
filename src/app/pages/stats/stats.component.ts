import { Component } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Data } from '../../models/graph.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  constructor(private bitcoinService: BitcoinService) { }
  prices$!: Observable<Data>

  ngOnInit() {
    this.prices$ = this.bitcoinService.getMarketPrice()
  }
}
