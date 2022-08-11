import { Component, NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private animation:AnimationItem;
  options:AnimationOptions = {
    path:'assets/82694-dancing-skeleton.json'
  }

  constructor(private ngZone:NgZone) {}
    created(animation:AnimationItem){
      console.log(animation);
    }
}
