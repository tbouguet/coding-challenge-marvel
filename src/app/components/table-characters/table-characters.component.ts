import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/character/characters.service';
import { Character } from 'src/app/models/character.model';
import { Thumbnail } from 'src/app/models/thumbnail.model';
import { MemberService } from 'src/app/services/member/member.service';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-table-characters',
  templateUrl: './table-characters.component.html',
  styleUrls: ['./table-characters.component.scss']
})
export class TableCharactersComponent implements OnInit {
  size: string = '/portrait_small.';
  offset: number = 0;
  characters: Character[];
  constructor(private characterService: CharactersService, private memberService: MemberService) { }

  ngOnInit() {
     this.getCharacters(this.offset);
  }

  /**
   * Get all characters
   * @param offset 
   */
  getCharacters(offset: number): void{
    this.characterService.getCharacters(offset).
     subscribe(characters => this.characters = characters);
  }

  /**
   * Concatene data to image url
   * @param thumbnail 
   */
  concateneImage(thumbnail: Thumbnail): string{
    return thumbnail.path + this.size + thumbnail.extension
  }

  /**
   * Get characters by offset
   * @param value 
   */
  changePage(value: string): void{
    this.offset = value === 'next' ? this.offset + 20 : this.offset - 20;
    this.getCharacters(this.offset);
  }

  /**
   * Add a member
   * @param character 
   */
  addMember(character:Character){
    let member: Member = new Member();
    member.id = character.id;
    member.name = character.name;
    this.memberService.postMember(member).subscribe((value) => console.log(value));
  }

}
