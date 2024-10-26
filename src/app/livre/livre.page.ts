import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage implements OnInit {
  livres: any[] = [];

  constructor(private livreService: LivreService) {}

  ngOnInit() {
    console.log('AddLivrePage chargée');
    this.loadLivres();
  }

  async loadLivres() {
    this.livres = await this.livreService.getLivres(); // Implémentez getLivres dans LivreService
  }

  doRefresh(event: any) {
    this.loadLivres().then(() => {
      event.target.complete();
    });
  }
}
