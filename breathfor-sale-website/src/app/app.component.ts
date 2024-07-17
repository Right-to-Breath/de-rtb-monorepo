import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, retry, share, Subject, switchMap, takeUntil, timer } from 'rxjs';

import { OpenseaGalleryService } from '@app/services/opensea-gallery.service';
import { Breath } from '@app/interfaces/breath';
import { Metadata } from '@app/interfaces/metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private stopPolling = new Subject();
  breath$!: Observable<Breath>;
  metadata$!: Observable<Metadata>;
  image$!: Observable<boolean>;
  openSeaUrl!: string;
  tid!: string;
  cid!: string;
  error = false;

  constructor(private route: ActivatedRoute, private openSeaService: OpenseaGalleryService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.cid = params.cid;
      this.tid = params.tid;
      
      this.openSeaUrl = `https://opensea.io/assets/0x98a1ffdb36079ca1c243276676fda5bb49277d26/${this.tid}/?force_update=true`;
      
      if(this.cid !== undefined && this.tid !== undefined) {
        if(this.isTokenLessThanZero(this.tid)) {
          this.error =  true;

        } else {
          this.breath$ = timer(1,3000).pipe(
            switchMap(() => this.openSeaService.getBreath(this.cid, this.tid)),
            retry(),
            share(),
            takeUntil(this.stopPolling)
          );
          
          this.metadata$ = timer(1, 3000).pipe(
            switchMap(() => this.openSeaService.getMetadata(this.cid, this.tid)),
            retry(),
            share(),
            takeUntil(this.stopPolling)
          );

          this.image$ = timer(1, 3000).pipe(
            switchMap(() => this.openSeaService.getImage(this.cid, this.tid)),
            retry(),
            share(),
            takeUntil(this.stopPolling)
          );
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.stopPolling.next(true);
  }

  isTokenLessThanZero(id: string): boolean {
    return +id < 0;
  }

  quoteIncludesAuthor(text: string): boolean {
    return text.includes('–');
  }
 }
