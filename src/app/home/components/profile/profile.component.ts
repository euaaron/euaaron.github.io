import { Component, OnInit } from '@angular/core';
import { IProfile } from '../../interfaces/IProfile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'profile-bar',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  profile!: IProfile;

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this._profileService.getProfileData("euaaron");
  }
}
