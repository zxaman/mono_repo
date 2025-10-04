import { Component, input, output } from '@angular/core';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Type definitions moved directly into the file
type ButtonVariant = 'default' | 'pressed' | 'disabled';
type ButtonIconPosition = 'left' | 'right';
type ButtonType = 'primary' | 'secondary';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  variant = input<ButtonVariant>('default');
  iconPosition = input<ButtonIconPosition>('left');
  hasIcon = input<boolean>(false);
  disabled = input<boolean>(false);
  iconSvg = input<string>('');
  type = input<ButtonType>('primary'); // New input for button type

  clicked = output<void>();

  constructor(private sanitizer: DomSanitizer) {}

  onClick() {
    if (this.variant() !== 'disabled') {
      this.clicked.emit();
    }
  }

  get isPressed(): boolean {
    return this.variant() === 'pressed';
  }

  get isDisabled(): boolean {
    return this.variant() === 'disabled' || this.disabled();
  }

  get buttonClass(): string {
    return this.type() === 'primary' ? 'primary-button' : 'secondary-button';
  }

  get safeIconSvg(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.iconSvg() || '');
  }
}