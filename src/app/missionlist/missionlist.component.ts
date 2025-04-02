import { Component } from '@angular/core';
import { SpaceXService } from '../services/spacex.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrl: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getAllMissions().subscribe((data) => {
      this.missions = data;
    })
  }
}
