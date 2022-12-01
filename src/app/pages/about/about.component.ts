import { Component, OnInit } from '@angular/core';
import { banner } from 'src/app/models/banner.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  banner!: banner;

  ngOnInit() {
    this.banner = new banner('../../../assets/banner.png', '');
  }
}
