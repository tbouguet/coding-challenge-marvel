import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member.model';
const url: string = 'http://localhost:8080/members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) {
      
  }

  /**
   * Get all members
   */
  getMembers(): Observable<Member[]>{
    return this.httpClient.get<Member[]>(url);
  }

  /**
   * Add a new member
   * @param member 
   */
  postMember(member:Member): Observable<Member[]>{
   return this.httpClient.post<Member[]>(url, member);
  }

  /**
   * Delete a member by id
   * @param id 
   */
  deleteMember(id:string): Observable<Member[]>{
   return this.httpClient.delete<Member[]>(`${url}/${id}`);
  }

}
