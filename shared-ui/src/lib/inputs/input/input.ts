import { Component, Input as NgInput, Output, EventEmitter } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type InputType = 'text' | 'password' | 'number' | 'search' | 'textarea';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  @NgInput() type: InputType = 'text';
  @NgInput() label = '';
  @NgInput() placeholder = '';
  @NgInput() required = false;
  @NgInput() disabled = false;
  @NgInput() minLength?: number;
  @NgInput() maxLength?: number;
  @NgInput() minValue?: number;
  @NgInput() maxValue?: number;
  @NgInput() rows = 3;
  @NgInput() cols = 50;

  private _value = '';
  
  @NgInput()
  get value(): string {
    return this._value;
  }
  
  set value(val: string) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  @Output() valueChange = new EventEmitter<string>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  // Password visibility toggle
  showPassword = false;

  // Methods
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.value = value;
  }

  onFocus(event: FocusEvent): void {
    this.focus.emit(event);
  }

  onBlur(event: FocusEvent): void {
    this.blur.emit(event);
  }

  // Helper methods
  getEffectiveType(): string {
    if (this.type === 'password') {
      return this.showPassword ? 'text' : 'password';
    }
    return this.type;
  }
}
