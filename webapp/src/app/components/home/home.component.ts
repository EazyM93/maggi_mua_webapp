import { Component, model, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  // massimo immagini nella home
  maxImgs: number = 12;

  // array delle immagini provenienti da imgur
  models: string[] = [
    'https://imgur.com/xlu30dy.jpeg',
    'https://i.imgur.com/JmuGIqO.jpg',
    'https://i.imgur.com/eCZAQgc.jpeg',
    'https://i.imgur.com/xMl96mB.jpeg',
    'https://i.imgur.com/xd63TN9.jpeg',
    'https://i.imgur.com/nqn9JHF.jpeg',
    'https://i.imgur.com/KBzgSrW.jpeg',
    'https://i.imgur.com/FLrVUnR.jpeg',

    // ripetizioni di prova
    'https://i.imgur.com/xd63TN9.jpeg',
    'https://i.imgur.com/nqn9JHF.jpeg',
    'https://i.imgur.com/KBzgSrW.jpeg',
    'https://i.imgur.com/FLrVUnR.jpeg',
  ];

  modelsArrayFirstRow: string[] = [];
  modelsArraySecondRow: string[] = [];


  ngOnInit(): void {
    this.image_rows_generator();
  }

  // metodo per assegnare le immagini dei modelli alle varie righe
  private image_rows_generator(){

    const modelsLength: number = this.models.length;

    if(modelsLength < this.maxImgs){
      const [firstArray, secondArray] = division_under_eigth(this.models);
      this.modelsArrayFirstRow = firstArray;
      this.modelsArraySecondRow = secondArray;console.log('meno di 12')
    }else{
      const shuffledArray: string[] = this.models.sort(() => Math.random() - 0.5);
      this.modelsArrayFirstRow = shuffledArray.slice(0, 6);
      this.modelsArraySecondRow = shuffledArray.slice(6, 12);console.log('più di 12')
    }

    // funzione gestione con meno di 8 foto
    function division_under_eigth(models: string[]){
      const rowLength: number = Math.floor(modelsLength / 2);
      const shuffledArray: string[] = models.sort(() => Math.random() - 0.5);
      const firstArray = shuffledArray.slice(0, rowLength);
      const secondArray = shuffledArray.slice(rowLength, rowLength * 2);
      return [firstArray, secondArray];
    }

  }

}
