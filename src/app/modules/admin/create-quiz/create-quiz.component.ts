import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  standalone: true
})
export class CreateQuizComponent implements OnInit{

  quizForm!: FormGroup
  typeCtrl!: FormControl
  showAddPropositon$!: Observable<boolean>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.typeCtrl = this.formBuilder.control("type")
    this.quizForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      question: ['', Validators.required],
      type: this.typeCtrl,
      duration: [null, Validators.required],
      propositions: this.formBuilder.array([this.createProposition()])
      // isCorrects: this.formBuilder.array([this.createCheckIsCorrect()]),
    })
    this.intialForm()
  }

  intialForm() {
    this.showAddPropositon$ = this.typeCtrl.valueChanges
  }

  createProposition() {
    return this.formBuilder.control('', Validators.required)
  }

  // createCheckIsCorrect() {
  //   return this.formBuilder.control(false, Validators.required)
  // }

  // get isCorrects(): FormArray {
  //   return this.quizForm.get('isCorrects') as FormArray
  // }

  get propositions(): FormArray {
    return this.quizForm.get('propositions') as FormArray
  }

  addProposition(): void {
    this.propositions.push(this.createProposition())
  }


  saveQuiz() {
    console.log(this.quizForm.value)
  }

}
