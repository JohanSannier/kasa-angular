import { Component, OnInit } from '@angular/core';
import { banner } from 'src/app/models/banner.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banner!: banner;

  ngOnInit() {
    this.banner = new banner(
      '../../../assets/banner.png',
      'Chez vous, partout et ailleurs'
    );
  }
}
