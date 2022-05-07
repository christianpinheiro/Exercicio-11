import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Exercício 11 - Atualização de taxa do BitCoin';

  constructor(
    public bitcoinService: BitcoinService
  ){}

  updateBitCoinRates(){
    this.bitcoinService.update();
  }
}
