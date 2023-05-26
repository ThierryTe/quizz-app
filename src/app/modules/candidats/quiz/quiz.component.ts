import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

enum TypeQuestion {
  MultiChoice,
  SingleChoice,
  openChoice,
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class QuizComponent implements OnInit{
  @Input()
  quizz!:any;

  @Input() 
  multiChoice: TemplateRef<any> | null = null;

  @Input() 
  singleChoice: TemplateRef<any> | null = null;

  @Input() 
  openChoice: TemplateRef<any> | null = null;

  currentTemp!: TemplateRef<any>;

  ngOnInit(): void {
    if(this.quizz.type === "MultiChoice") {
      this.currentTemp = this.multiChoice!
    } 
    
    if(this.quizz.type === "SingleChoice") {
      this.currentTemp = this.singleChoice!
    } 

    if(this.quizz.type === "OpenChoice") {
      this.currentTemp = this.openChoice!
    } 
  }
  
}
