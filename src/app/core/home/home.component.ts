import { Component, computed, inject, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private router = inject(Router);
  private regService = inject(RegistrationService);

  public steps = ['Step 1', 'Step 2', 'Step 3'];

  public currentStep = signal(this.getStepIndexFromUrl());

  public tabDisabled = computed(() =>
    this.steps.map((_, i) => i > this.regService.completedSteps())
  );

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.currentStep.set(this.getStepIndexFromUrl());
      });
  }

  private getStepIndexFromUrl(): number {
    const match = this.router.url.match(/step-(\d+)/);
    return match ? +match[1] - 1 : 0;
  }

  goToStep(index: number) {
    if (!this.tabDisabled()[index]) {
      this.router.navigate([`/register/step-${index + 1}`]);
    }
  }
}
