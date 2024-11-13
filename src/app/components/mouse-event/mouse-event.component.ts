import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css'],
})
export class MouseEventComponent {
  buttonText: string = 'Click me!';
  buttonStyle: string = 'normal';

  onMouseOver(): void {
    this.buttonText = 'click me!';
    this.moveButtonRandomly();
  }

  moveButtonRandomly(): void {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;


    const randomX = Math.floor(Math.random() * (screenWidth - 150));
    const randomY = Math.floor(Math.random() * (screenHeight - 50));

    const button = document.getElementById('randomButton');
    if (button) {
      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  }

  onMouseOut(): void {
    this.buttonText = 'Click đi ^^';
  }
}
