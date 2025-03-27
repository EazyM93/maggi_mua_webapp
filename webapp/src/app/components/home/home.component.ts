import { Component, inject, model, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  testoMain = `<b>Pro make up artist</b> con sede a <b>Roma</b>.<br><br>La mia passione per il trucco è nata grazie alla mia esperienza nel settore del <b>Beauty Retail</b>. Per affinare ulteriormente le mie competenze, ho seguito un <b>Corso Professionale</b> che mi ha permesso di esplorare le tecniche più avanzate e le ultime tendenze del settore. Ho avuto il privilegio di lavorare presso <b>set televisivi e sfilate</b>, realizzando look sofisticati e personalizzati per ogni occasione.<br><br>Il mio stile è <b>elegante, glam e pulito</b> grazie all'ausilio di prodotti <b>Luxury</b> che garantiscono un'eccellente <b>Experience e Tenuta</b>.`;


  testoSposa = 'Realizzo make up su misura, tenendo conto dello stile e del desiderio della sposa. Dai look più eleganti, glam e romantici ai look più strutturati e "bold", valorizzo il viso con prodotti skincare performanti e ottime tecniche di contouring, con prodotti make up "a prova di emozione" e a lunga tenuta.';

  testoModa = 'Creo make up sofisticati e in linea con i trend delle sfilate e del mondo editorial, aggiornandomi continuamente con corsi di formazione. Focus del mio lavoro è enfatizzare i punti forti e distintivi del/della modello/a, tenendo conto delle luci, del mood del progetto e dello stile.';

  ngOnInit(): void {

  }


}
