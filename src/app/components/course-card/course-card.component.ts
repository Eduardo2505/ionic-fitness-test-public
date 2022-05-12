import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() duration: string;
  @Input() bodyArea: string;
  @Input() new: string;

  constructor() {}

  ngOnInit() {}
}
