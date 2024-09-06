import { Component } from '@angular/core';

@Component({
  selector: 'app-trucco-sposa',
  templateUrl: './trucco-sposa.component.html',
  styleUrl: './trucco-sposa.component.scss'
})
export class TruccoSposaComponent {

  // immagini delle spose
  models: any[] = [
    'https://imgur.com/qAGXslT.jpeg',
    'https://imgur.com/7qMrrIr.jpeg'
  ];

  // opzioni responsive
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

}
