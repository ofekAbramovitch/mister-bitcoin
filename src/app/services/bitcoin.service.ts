import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of, switchMap, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  public getRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1'
    return this.getResult('RATE', url)
  }

  public gerRateStream() {
    return timer(0, 1000 * 60 * 15).pipe(
      switchMap(() => this.getRate())
    )
  }

  public getMarketPrice() {
    const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    return this.getResult('MARKET_PRICE', url)
  }

  getAvgBlockSize() {
    const url = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'
    return this.getResult('AVG_BLOCK_SIZE', url)
  }

  getResult(type: string, url: string) {
    const result = loadFromStorage(type)
    if (result) return of(result)
    return this.http.get<any>(url)
      .pipe(
        tap(res => saveToStorage(type, res))
      )
  }
}

function loadFromStorage(key: string) {
  let data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function saveToStorage(key: string, value: any) {
  const data: any = JSON.stringify(value) || null
  localStorage.setItem(key, data)
}
