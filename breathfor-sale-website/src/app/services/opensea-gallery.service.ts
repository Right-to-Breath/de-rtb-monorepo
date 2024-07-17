import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Breath } from '@app/interfaces/breath';
import { Metadata } from '@app/interfaces/metadata';
import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class OpenseaGalleryService {
  constructor(private http: HttpClient) { }

  getBreath(collection: string, id: string): Observable<Breath> {    
    return this.http.get<Breath>(`${environment.apiUrl}${collection}/breath/${id}.json`);
  }

  getMetadata(collection: string, id: string): Observable<Metadata> {
    return this.http.get<Metadata>(`${environment.apiUrl}${collection}/metadata/${id}`);
  }

  getImage(collection: string, id: string): Observable<any> {
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'Accept': 'image/png',
      }),
      responseType: 'blob',
    };
    
    return this.http.get<Observable<Blob>>(`${environment.apiUrl}${collection}/images/${id}.png`, httpOptions);
  }
}
