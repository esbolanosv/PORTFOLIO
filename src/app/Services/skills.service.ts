import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getSkills() {
    return this.http.get(this.URL + 'skills')
      .pipe(map((res: any) => res.skills
      )
      )
  } 
  getSkillsExperience() {
    return this.http.get(this.URL + 'experience')
      .pipe(map((res: any) => res.experience
      )
      )
  } 
}
