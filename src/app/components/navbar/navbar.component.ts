import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent implements OnInit, OnDestroy {

  transparentBackground = false;
  menuOpen = false;
  subscription: Subscription = new Subscription;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(event => {this.transparentBackground = this.router.url !== '/'})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
