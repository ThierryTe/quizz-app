import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: true
})
export class QuizComponent {
  @Input()
  titre!:string;

  @Input()
  description!:string;

  @Input() 
  currentTemp: TemplateRef<any> | null = null;

  @Input() 
  multiChoice: TemplateRef<any> | null = null;

  @Input() 
  singleChoice: TemplateRef<any> | null = null;

  @Input() 
  openChoice: TemplateRef<any> | null = null;

  
}
