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

  test = [
    {libelle: "rep 12", id:"rep_12"},
    {libelle: "rep 22", id:"rep_22"},
    {libelle: "rep 32", id:"rep_32"}
  ];

  ngOnInit(): void {
    console.log(this.quizz.propositions)
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
