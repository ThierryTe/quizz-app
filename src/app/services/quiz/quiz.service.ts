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
      reponse: [
        {libelle: "rep 1", id:"rep_1"},
        {libelle: "rep 2", id:"rep_2"},
      ], 
      propositions: [
        {libelle: "rep 1", id:"rep_1"},
        {libelle: "rep 2", id:"rep_2"},
        {libelle: "rep 3", id:"rep_3"}
      ] 
    },
    {
      id: 2,
      titre:"Deuxieme question Java",
      type: "SingleChoice", 
      category: "Java",
      reponse: [
        {libelle: "rep 1", id:"rep_1"},
      ], 
      propositions: [
        {libelle: "rep 12", id:"rep_12"},
        {libelle: "rep 22", id:"rep_22"},
        {libelle: "rep 32", id:"rep_32"}
      ] 
    },
    {
      id: 3,
      titre:"Premiere question angular",
      type: "OpenChoice", 
      category: "Angular",
      reponse: [{libelle: "rep 123", id:"rep_123"},],
      propositions: []
    },
    {
      id: 4,
      titre:"Deuxieme question angular",
      type: "SingleChoice", 
      category: "Angular",
      reponse: [{libelle: "rep 124", id:"rep_124"},],
      propositions: [
        {libelle: "rep 124", id:"rep_124"},
        {libelle: "rep 224", id:"rep_224"},
        {libelle: "rep 324", id:"rep_324"}
      ] 
    }
  ];

  constructor() { }

  getQuizzesByService(category: string) {
    return this.listQuizz
  }
}
