import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';
import { Experience } from '../models/experience.model';
import { SkillsService } from '../Services/skills.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  [x: string]: any;

  skillListExperience:Experience={experience:[]};
  

  constructor(private _skillsExperience: SkillsService, private modalCtrl:ModalController) {
  }

  ngOnInit(): void {
   
    this.getSkillsExperience()
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: DetailPage,
      initialBreakpoint: 0.8,
      breakpoints: [0, 0.8, 1],
    });
    return await modal.present();
  }

  getSkillsExperience() {
    this._skillsExperience.getSkillsExperience().subscribe((res:Experience) => {
      this.skillListExperience= res
      console.log(this.skillListExperience);
      
    })
  }
}
