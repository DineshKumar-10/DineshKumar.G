import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit, OnDestroy{
  
  roles: string[] = [
    'Frontend Developer',
    'Java Developer',
    'Java Full Stack Developer',
    'Backend Developer',
    'Angular Developer'
  ];

  currentText = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 120;
  private deletingSpeed = 80;
  private delayAfterWord = 1500;
  private timeoutId: any;

  ngOnInit(): void {
    this.typeEffect();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }

  private typeEffect(): void {
    const currentRole = this.roles[this.roleIndex];

    if (!this.isDeleting) {
      this.currentText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;
    } else {
      this.currentText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
    }

    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      delay = this.delayAfterWord;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 500;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), delay);
  }

}
