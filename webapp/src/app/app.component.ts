import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'webapp';

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  actualComponent: string | undefined;
  goToComponent: string | undefined;

  ngOnInit(): void {
    this.handleNavigation();
  }

  handleNavigation(): void{
    this.router.events.subscribe(e => {
      if(e instanceof ActivationEnd){
        this.actualComponent = e.snapshot.data['comp'];
        if(this.actualComponent === 'home') this.goToComponent = 'portfolio';
        if(this.actualComponent === 'portfolio') this.goToComponent = 'home';
      }
    })
  }

}
