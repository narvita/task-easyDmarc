import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Injectable({ providedIn: 'root' })
export class AuthorizedGuard implements CanActivate {
  private regService = inject(RegistrationService);
  private router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userInfo = this.regService.getAllValues();
    if (userInfo.email) {
      return true;
    } else {
      this.router.navigate([`/register/step1}`]);
      return false;
    }
  }
}
