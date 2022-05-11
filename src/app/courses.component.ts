import { Component } from '@angular/core'; // called string interpolation

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
}
