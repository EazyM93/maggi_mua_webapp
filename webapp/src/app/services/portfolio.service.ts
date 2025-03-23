import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  portrait: string[] = [
    'https://imgur.com/JmuGIqO.jpg',
    'https://imgur.com/eCZAQgc.jpeg',
    'https://imgur.com/xMl96mB.jpeg',
    'https://imgur.com/nqn9JHF.jpeg',
    'https://imgur.com/KBzgSrW.jpeg',
    'https://imgur.com/FLrVUnR.jpeg'
  ];

  vertical: string[] = [
    'https://imgur.com/qAGXslT.jpeg',
    'https://imgur.com/7qMrrIr.jpeg',
    'https://imgur.com/42eUNOJ.jpeg',
    'https://imgur.com/hGhE0le.jpeg',
    'https://imgur.com/7oxQSgw.jpeg'
  ];

}
