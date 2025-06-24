import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  splashscreen = true;
  soldierSitting: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.splashscreen = false;
    }, 8000);
    anime
      .timeline()
      .add({
        targets: ['.soldier'],
        translateX: `-50vw`,
        duration: 4000,
        easing: 'easeOutSine',
      })
      .add({
        targets: ['.soldier'],
        scaleY: `0.8`,
        scaleX: '0.8',
        duration: 2000,
        begin: () => {
          this.soldierSitting = true;
          anime({
            targets: ['.title'],
            delay: 400,
            opacity: 1,
            easing: 'easeOutExpo',
            duration: 8000,
          });
        },
      });
  }
}
