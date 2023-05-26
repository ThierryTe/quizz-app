import { AfterContentChecked, Component, Inject, Input, OnInit } from '@angular/core';
import {QuizComponent} from '../quiz/quiz.component'
import { CommonModule } from '@angular/common';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

enum TypeQuestion {
  MultiChoice,
  SingleChoice,
  openChoice,
}

@Component({
  selector: 'app-list-quizz',
  templateUrl: './list-quizz.component.html',
  styleUrls: ['./list-quizz.component.scss'],
  standalone: true,
  imports: [QuizComponent, CommonModule]
})

export class ListQuizzComponent implements OnInit {
  
  @Input() 
  specialite!: string

  titre: string ="Question1"
  description: string = "Description"

  listQuizz!: any[]

  constructor(private quizService : QuizService, private sanitizer: DomSanitizer) {}
  

  ngOnInit(): void {
    this.getQuiz()
  }

  getQuiz() {
    this.listQuizz = this.quizService.getQuizzesByService(this.specialite)
    this.listQuizz.forEach((quiz: any) => {
      quiz.groupName = `question_${quiz.id}`;
    });
  }

}


