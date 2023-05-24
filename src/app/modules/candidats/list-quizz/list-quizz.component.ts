import { Component, Input } from '@angular/core';
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

})

export class ListQuizzComponent {
  
    @Input() 
    specialite!: string

    titre: string ="Question1"
    description: string = "Description"

    listQuizz: any[] = [
      {titre:"Question 1", description: "Une description question 1", type: TypeQuestion.MultiChoice, reponse: ["rep 1", "rep 2"], propositions: ["rep 1", "rep 2", "rep 3"] },
      {titre:"Question 2", description: "Une description question 2", type: TypeQuestion.SingleChoice, reponse: ["rep 1"], propositions: ["rep 2", "rep 1"]},
      {titre:"Question 3", description: "Une description question 3", type: TypeQuestion.openChoice, reponse: ["rep 1"]},
  ];

  

}


