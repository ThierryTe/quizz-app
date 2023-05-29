import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  listQuizz = [
    {
      id: 1,
      titre:"Premiere question Java",
      type: "MultiChoice", 
      category: "Java",
      timeInSecond: 5, 
      userChoice:<any>[], 
      propositions: [
        {libelle: "rep 1", id:"rep_1", isCorrect: false},
        {libelle: "rep 2", id:"rep_2", isCorrect: true},
        {libelle: "rep 3", id:"rep_3", isCorrect: true}
      ] 
    },
    {
      id: 2,
      titre:"Deuxieme question Java",
      type: "SingleChoice", 
      category: "Java",
      timeInSecond: 5,
      userChoice:<any>[],
      propositions: [
        {libelle: "rep 12", id:"rep_12", isCorrect: false},
        {libelle: "rep 22", id:"rep_22", isCorrect: false},
        {libelle: "rep 32", id:"rep_32", isCorrect: true}
      ] 
    },
    {
      id: 3,
      titre:"Premiere question angular",
      type: "OpenChoice", 
      category: "Angular",
      timeInSecond: 5,
      userChoice:<any>[],
      propositions: [
        {libelle: "reponse", id:"rep_12pp", isCorrect: true},
        {libelle: "reponse ", id:"rep_12pp", isCorrect: true}
      ]
    },
    {
      id: 4,
      titre:"Deuxieme question angular",
      type: "SingleChoice", 
      category: "Angular",
      timeInSecond: 5,
      userChoice:<any>[],
      propositions: [
        {libelle: "rep 124", id:"rep_124", isCorrect: false},
        {libelle: "rep 224", id:"rep_224", isCorrect: false},
        {libelle: "rep 324", id:"rep_324", isCorrect: true}
      ] 
    }
  ];

  score: number = 0;
  totalQuestion: number = 0
  constructor() { }

  getQuizzesByService(category: string) {
    return this.listQuizz.filter(item => item.category === category)
  }

  saveReponse(id:number, response: any) : void {
    let quizIndex : any = this.listQuizz.findIndex(item => item.id === id)
    this.listQuizz[quizIndex].userChoice.push(response)
  }
}
