import { Routes } from "@angular/router";
import { HomeComponent } from "../modules/candidats/home/home.component";
import { ListQuizzComponent } from "../modules/candidats/list-quizz/list-quizz.component";
import { QuizComponent } from "../modules/candidats/quiz/quiz.component";
import { ScoreComponent } from "../modules/candidats/score/score.component";

export default [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'quizz/:specialite',
        component: ListQuizzComponent
    },
    {
        path: 'score',
        component: ScoreComponent
    },
    {
        path:'',
        redirectTo:'home', pathMatch: 'full'
    }
]as Routes