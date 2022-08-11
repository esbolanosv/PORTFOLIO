import { Component, OnInit } from '@angular/core';
import { SkillsService} from '../Services/skillsHeroku.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  skillList = [];
 
  constructor(private _skills: SkillsService) {
  }

  ngOnInit(): void {
  }
}
