import { Component, Input } from '@angular/core';

@Component({
  selector: 'bfs-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() error!: boolean;

  displayErrorMessage(): string {
    return this.error ? 'Please, breathe again' : 'This NFT is unrevealed'
  }
}
