import { Component, Input } from '@angular/core';
import { banner } from 'src/app/models/banner.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() banner!: banner;
}
