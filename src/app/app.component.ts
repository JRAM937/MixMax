import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "../components/search-bar/search-bar.component";
import { SearchResultsComponent } from "../components/search-results/search-results.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SearchBarComponent, SearchResultsComponent]
})
export class AppComponent {
  title = 'MixMax';
}
