import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor (
    private bitcoinService: BitcoinService) { }

    rate$!: Observable<string>

    async ngOnInit() {
      this.rate$ = this.bitcoinService.gerRateStream()
    }

}
