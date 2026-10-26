import { Component, signal } from '@angular/core';
import { Basics } from './basics/basics';
import { T1LifecycleHooks } from './t1-lifecycle-hooks/t1-lifecycle-hooks';

@Component({
  selector: 'app-root',
  imports: [Basics, T1LifecycleHooks],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('1-first-angular-app');
}
