import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  private titleService = inject(Title);

  title = 'webapp';

  sidebarVisible: boolean = false;

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  actualComponent: string | undefined;
  goToComponent: string | undefined;

  mainImg = 'https://imgur.com/dh8DUyt';

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
