import { Component, inject, OnInit } from '@angular/core';
import { RegistrationService } from '../../core/services/registration.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-information',
  imports: [MatCardModule],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss',
})
export class UserInformationComponent {
  private registrationService = inject(RegistrationService);
  public userInformation = this.registrationService.getAllValues();
}
