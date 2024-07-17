import { Component, Input } from '@angular/core';

@Component({
  selector: 'bfs-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent {
  @Input() progress!: number;
  @Input() total!: number;
  @Input() breathProgress!: number;
  @Input() title!: string;
  color!: string;

  calculateProgress(progress: number): number {
    if(!progress) {
      progress = 0;
    }

    if(this.total === 0) {
      this.total = progress;
    } else if (!this.total) {
      this.total = 100;
    }

    if(progress > this.total) {
      progress = 100;
      this.total = 100;
    }

    return progress = (progress / this.total) * 100;
  }
  
}
