import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { FirstRegistrationStepComponent } from './pages/first-registration-step/first-registration-step.component';
import { ThirdRegistrationStepComponent } from './pages/third-registration-step/third-registration-step.component';
import { SecondRegistrationStepComponent } from './pages/second-registration-step/second-registration-step.component';
import { UserInformationComponent } from './pages/user-information/user-information.component';
import { StepGuard } from './core/guards/step-guard.guard';
import { AuthorizedGuard } from './core/guards/authorized.guard';

const childeRoutes: Routes = [
  { path: '', redirectTo: 'step-1', pathMatch: 'full' },
  {
    path: 'step-1',
    component: FirstRegistrationStepComponent,
  },
  {
    path: 'step-2',
    component: SecondRegistrationStepComponent,
    canActivate: [StepGuard],
  },
  {
    path: 'step-3',
    component: ThirdRegistrationStepComponent,
    canActivate: [StepGuard],
  },
];

export const routes: Routes = [
  {
    path: 'register',
    component: HomeComponent,
    children: childeRoutes,
  },
  {
    path: 'userInfo',
    component: UserInformationComponent,
    canActivate: [AuthorizedGuard],
  },
  {
    path: '**',
    redirectTo: 'register',
  },
];
