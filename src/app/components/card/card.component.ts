import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: card;

  constructor(private router: Router) {}

  onClickNavigate() {
    this.router.navigateByUrl(`appartment/${this.card.id}`);
  }
}
