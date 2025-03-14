import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'week10-angular by Liz';
  userName= 'Liz';
  message = 'Hello from appComponent';

  dogImage = "https://cdn.pixabay.com/photo/2018/01/03/13/57/golden-retiver-3058393_1280.jpg"

  today: Date = new Date(2025, 2, 11)
  now = new Date()

  stud={
    id: 101,
    firstName: "John",
    lastName: "Doe",
    course: "Angular"
  }

  buttonClick() {
    console.log('Button clicked!');
  }

}
