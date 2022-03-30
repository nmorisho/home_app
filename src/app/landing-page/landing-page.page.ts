import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  rentalHomes = [{
    address: 'Cape Town, Western Cape, South Africa',
    rentalHomeType: 'Cottage',
    price: '580',
    rating: '4.0',
    reviews: '13',
    details: 'ENTIRE GUEST SUITE: 1 Bed, 2 Guests, 1 Bedroom, 1 Bathroom',
    image1: 'https://a0.muscache.com/im/pictures/e5224b34-5f63-4944-90e6-2231ad301108.jpg?im_w=1200',
    image2: 'https://a0.muscache.com/im/pictures/22314615-b07b-470a-8944-932b0b271bbf.jpg?im_w=1440',
    image3: 'https://a0.muscache.com/im/pictures/51d3b32c-43fd-4177-9681-b1ea5c3de04c.jpg?im_w=1440',
  },
  {
    address: 'Cape Town, Western Cape, South Africa    ',
    rentalHomeType: 'Private Room',
    price: '545',
    rating: '3.2',
    reviews: '17',
    details: 'PRIVATE ROOM IN RESIDENTIAL HOME: 1 Bed, 2 Guests, 1 Bedroom, 1 Bathroom',
    image1: 'https://a0.muscache.com/im/pictures/4b0beb63-74be-493a-8dcf-c0e8662ac97a.jpg?im_w=1200',
    image2: 'https://a0.muscache.com/im/pictures/955bd9b2-b9ab-451e-8e73-aeb5d83a2609.jpg?im_w=1440',
    image3: 'https://a0.muscache.com/im/pictures/128e1c65-b254-4a19-9891-6a244bad877f.jpg?im_w=1440',
  },
  {
    address: 'Cape Town, Western Cape, South Africa',
    rentalHomeType: 'Residential Home',
    price: '700',
    rating: '4.9',
    reviews: '9',
    details: 'ENTIRE RESIDENTIAL HOME: 3 Bed, 4 Guests, 2 Bedroom, 2 Bathroom',
    image1: 'https://a0.muscache.com/im/pictures/12d6fde4-75cf-4e92-89b3-43e550216b60.jpg?im_w=1440',
    image2: 'https://a0.muscache.com/im/pictures/984ada50-3bf2-4e81-b516-32300982e3c1.jpg?im_w=1440',
    image3: 'https://a0.muscache.com/im/pictures/a6f9c6f2-7990-4661-ad18-46ff307c6834.jpg?im_w=1440',
  }];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 5000
    }
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.router.navigate(['/login']);
  }

  signUp() {
    this.router.navigate(['/register']);
  }

  bookNow() {
    this.router.navigate(['/book-now']);
  }

}
