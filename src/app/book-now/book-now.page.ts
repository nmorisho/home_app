import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.page.html',
  styleUrls: ['./book-now.page.scss'],
})
export class BookNowPage implements OnInit {

  selectedDate = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/home']);
  }

}
