import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Injectable({ providedIn: 'root' })
export class StepGuard implements CanActivate {
  private regService = inject(RegistrationService);
  private router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const step = parseInt(route.url[0].path.split('-')[1]);
    
    const completed = this.regService.completedSteps();

    if (step <= completed + 1) return true;

    this.router.navigate([`/register/step-1}`]);
    return false;
  }
}
