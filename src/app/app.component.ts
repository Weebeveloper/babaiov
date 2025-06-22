import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  splashscreen = true;
  @ViewChild('soldier') soldier!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {}, 8000);
    anime
      .timeline()
      .add({
        targets: ['.person'],
        translateX: `-50vw`,
        duration: 4000,
        easing: 'easeOutSine',
      })
      .add({
        targets: ['.person'],
        scaleY: `0.8`,
        scaleX: '0.8',
        duration: 2000,
        begin: () => {
          this.soldier.nativeElement.style.backgroundImage =
            'url(../assets/soldier-sit.png)';
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
