import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from '../models/card.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  card!: card;
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    const cardId = this.route.snapshot.params['id'];
    this.card = this.cardService.getCardById(cardId);
  }
}
