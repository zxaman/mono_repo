import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Button } from '@my-org/shared-ui';
import { Input } from '@my-org/shared-ui';

interface FormData {
  username: string;
  password: string;
  age: string;
  search: string;
  bio: string;
  numericData: string;
}

@Component({
  imports: [RouterModule, Button, FormsModule, Input, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio';

  // Form data object to store all input values
  formData: FormData = {
    username: '',
    password: '',
    age: '',
    search: '',
    bio: '',
    numericData: ''
  };

  // Button text that can be changed dynamically
  buttonText = 'Click Me';
  
  // Default icon for buttons with icons
  readonly currentIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12h14'></path><path d='m12 5 7 7-7 7'></path></svg>";

  // Method to change button text
  updateButtonText(newText: string): void {
    this.buttonText = newText;
  }

  // Click handlers for different button states
  onButtonClick(): void {
    console.log('Primary button clicked!');
  }
  
  onSecondaryClick() {
    console.log('Secondary button clicked!');
  }
}