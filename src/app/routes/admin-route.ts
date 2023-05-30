import { Routes } from "@angular/router";
import { CreateQuizComponent } from "../modules/admin/create-quiz/create-quiz.component";

export default [
    {
        path: 'edit',
        component: CreateQuizComponent
    },
    {
        path:'',
        redirectTo:'edit', pathMatch: 'full'
    }
] as Routes