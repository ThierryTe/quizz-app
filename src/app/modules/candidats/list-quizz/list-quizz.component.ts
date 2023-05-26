import { AfterContentChecked, Component, Inject, Input, OnInit } from '@angular/core';
import {QuizComponent} from '../quiz/quiz.component'
import { CommonModule } from '@angular/common';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
  imports: [QuizComponent, CommonModule, ReactiveFormsModule, FormsModule, RouterModule]
})

export class ListQuizzComponent implements OnInit {
  
  @Input() 
  specialite!: string

  questionForm!: FormGroup;
  getProposition(){
    return this.questionForm.get("propositions");
  }
  

  listQuizz!: any[]

  listResponse : {id: number, propositions: any[], reponses: any[]}[] = []

  constructor(private fb:FormBuilder,private quizService : QuizService, private router: Router) {

  }
  
  responseUserQuizzes : any[] = [];

  ngOnInit(): void {
    this.getQuiz()
  }

  selectedResponseChecbox($event : any, quiz: any) {
    
    if($event.target.checked) {
      let itemResponse = this.listResponse.find(item => item.id === quiz.id)
      if(itemResponse) {
        this.listResponse = this.listResponse.filter(item => item.id !== quiz.id)
        itemResponse.reponses.push($event.target.value)
        var item = itemResponse
      } else {
        var item : {id: number, propositions: any[], reponses: any[]} = {id: quiz.id, propositions: quiz.propositions, reponses: [$event.target.value] }
      }
      this.listResponse.push(item)
    } else {
      let itemResponse : any = this.listResponse.find(item => item.id === quiz.id)
      let reponses = itemResponse.reponses.filter((item :string )=> item != $event.target.value)
      itemResponse.reponses = reponses
      this.listResponse = this.listResponse.filter(item => item.id !== itemResponse.id)
      this.listResponse.push(itemResponse)
    }
    console.log(this.listResponse);
  }

  selectedResponseRadioOrInput($event : any, quiz: any) {
    let itemResponse = this.listResponse.find(item => item.id === quiz.id)
    if(itemResponse) {
      this.listResponse = this.listResponse.filter(item => item.id !== quiz.id)
      itemResponse.reponses = [$event.target.value]
      var item = itemResponse
    } else {
      var item : {id: number, propositions: any[], reponses: any[]} = {id: quiz.id, propositions: quiz.propositions, reponses: [$event.target.value] }
    }
    this.listResponse.push(item)
    console.log(this.listResponse);
  }

  checkCorrectAnswer(response : {id: number, propositions: any[], reponses: any[]}) : boolean {
    let correctProposition = response.propositions.filter(item => item.isCorrect)

    if(response.reponses.length > 1) {
      if(response.reponses.length != correctProposition.length) return false
      
      let intersection = correctProposition.filter(item => response.reponses.includes(item.libelle))
      
      if(intersection.length === correctProposition.length) return true
      return false

    }

    let intersection = correctProposition.filter(item => response.reponses.includes(item.libelle))
    

    if(intersection.length > 0) return true

    return false
  }

  submitResponse() {
    let score = 0
    for (const itemResponse of this.listResponse) {
      let result = this.checkCorrectAnswer(itemResponse)
      console.log(result)
      if(result) {
        score++
      }
    }
    this.quizService.score = score
    this.quizService.totalQuestion = this.listQuizz.length
    this.router.navigate(['score'])
  }

  getQuiz() {
    this.listQuizz = this.quizService.getQuizzesByService(this.specialite)
    this.listQuizz.forEach((quiz: any) => {
      quiz.groupName = `question_${quiz.id}`;
    });
  }

}


