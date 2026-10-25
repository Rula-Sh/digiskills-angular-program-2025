import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-t1-lifecycle-hooks',
  styleUrl: './t1-lifecycle-hooks.scss',
  templateUrl: './t1-lifecycle-hooks.html',
})
export class T1LifecycleHooks {
  @Input() messageFromParent!: string;
  show = false;

  constructor() {
    console.log('1- Constructor: Component is being created');
  }
  
  ngOnChanges() {
    console.log('2- ngOnChanges: Fired because the component @Input() property received a new value');
  }

  ngOnInit() {
    console.log('3- ngOnInit: Fired once after the component is initialized');
  }

  ngDoCheck() {
    console.log('4- ngDoCheck: Fired on every change detection run');
  }

  ngAfterViewInit() {
    console.log('5- ngAfterViewInit: Fired once after the component view (and its children) is initialized');
  }

  ngOnDestroy() {
    console.log('6- ngOnDestroy: Fired once just before the component is removed from the DOM');
  }
}
