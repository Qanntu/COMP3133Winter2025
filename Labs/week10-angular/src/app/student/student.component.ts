import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})

export class StudentComponent {

  //local variable
  x = 10

  @Input() student: any

}
