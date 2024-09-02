import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marketplace-web';

  showToolbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateToolbarVisibility();
    });
    this.updateToolbarVisibility();
  }

  private updateToolbarVisibility(): void {
    const url = this.router.url;
    this.showToolbar = !url.startsWith('/autenticacao');
  }
}
