import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-show-restaurants',
  templateUrl: './show-restaurants.component.html',
  styleUrls: ['./show-restaurants.component.css'],
  providers: [RestaurantService]
})

export class ShowRestaurantsComponent implements OnInit {

  restaurantList: FirebaseListObservable<any[]>;
  selectedRestaurant = null;
  selectedRestaurantToDelete = null;

  restaurants = ["Jade Garden", "Panda Express", "Canlis", "Olive Garden", "The Keg", "The Old Spaghetti Factory", "The Cheesecake Factory"];

  constructor(private router: Router, private restaurantService: RestaurantService){}

  ngOnInit() {
    this.restaurantList = this.restaurantService.getRestaurants();
  }

  editRestaurant(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }

  finishedEditing() {
    this.selectedRestaurant = null;
  }

  goToEditRestaurantPage(clickedRestaurant) {
    this.router.navigate(['edit-restaurant', clickedRestaurant.$key]);
  }

  goToDeleteRestaurantPage(clickedRestaurant) {
    this.router.navigate(['delete-restaurant', clickedRestaurant.$key]);
  }

  goToAddRestaurantPage() {
    this.router.navigate(['new-restaurant']);
  }

  goToSearchRestaurantPage() {
    this.router.navigate(['search-restaurant']);
  }
}
