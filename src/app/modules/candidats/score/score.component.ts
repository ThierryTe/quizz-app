import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class ScoreComponent implements OnInit {

  score!: number
  totalScore!: number

  constructor(private serviceQuiz: QuizService) {}

  ngOnInit(): void {
    this.score = this.serviceQuiz.score
    this.totalScore = this.serviceQuiz.totalQuestion
  }

}
