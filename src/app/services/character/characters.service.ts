import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';

const url: string = 'http://localhost:8080/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  
  constructor(private httpClient: HttpClient) {
      
  }

  /**
   * Get all characters by offset
   * @param offset 
   */
  getCharacters(offset:number): Observable<Character[]>{
    let httpParams: HttpParams = new HttpParams().set("offset", offset.toString());
    return this.httpClient.get<Character[]>(url, {params: httpParams});
  }

}
