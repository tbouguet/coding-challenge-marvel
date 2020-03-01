import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member/member.service';
import { Member } from 'src/app/models/member.model';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-table-team',
  templateUrl: './table-team.component.html',
  styleUrls: ['./table-team.component.scss']
})


export class TableTeamComponent implements OnInit {

  members: Member[];

  
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getMembers().subscribe((members) => this.members = members)
  }

  /**
   * Delete a member by id
   * @param id 
   */
  deleteMember(id: string){
    this.memberService.deleteMember(id).subscribe((members) => this.members = members);
  }

}
