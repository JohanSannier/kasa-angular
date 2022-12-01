import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit {
  cards!: card[];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getAllCards();
  }
}
