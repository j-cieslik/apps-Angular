import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';
  title = 'Typing';

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
