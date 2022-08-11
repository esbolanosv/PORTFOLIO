import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../Services/skills.service';
import { Skills } from '../models/skills.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  skillList:Skills={skills:[]};

  constructor(private _skills: SkillsService) {
  }

  ngOnInit(): void {
    this.getSkills()
  }


  getSkills() {
    this._skills.getSkills().subscribe((res:Skills) => {
      this.skillList= res
      console.log(this.skillList);
      
    })
  }
}
