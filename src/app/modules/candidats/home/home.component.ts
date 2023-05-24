import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterModule]
})
export class HomeComponent implements OnInit{

constructor(private router: Router){

}
  specialite!: string;

  ngOnInit(){

  }

 
}
