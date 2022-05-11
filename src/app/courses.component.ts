import { Component } from '@angular/core'; // called string interpolation
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: ` <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>`,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  // dependency injection means injecting or providing the dependencies of a class into it's constructor
}
