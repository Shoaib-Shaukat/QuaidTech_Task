import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';

  async executeCodeSequentially() {
    const codes = [this.input1, this.input2, this.input3, this.input4];

    for (const code of codes) {
      await this.executeCode(code);
    }
  }

  executeCode(code: string): Promise<void> {
    return new Promise((resolve) => {
      try {
        const func = new Function(code);
        func();
        resolve();
      } catch (error) {
        console.error('Error executing code:', error);
        resolve();
      }
    });
  }
}
