import { Component, inject, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  private portfolioService = inject(PortfolioService);

  portraitSet: string[] = [];
  verticalSet: string[] = [];

  ngOnInit(): void {
    this.handleRouting();
  }

  private handleRouting(){
    this.setPhotos();
  }

  private setPhotos(){
    this.portraitSet = this.portfolioService.portrait;
    this.verticalSet = this.portfolioService.vertical;
  }

}
