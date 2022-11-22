import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo!: string;

  @Input() imagePath: string = '';
  @Input() text: string = '';

  ngOnInit() {
    this.logo = '../../../assets/logo.png';
  }
}
