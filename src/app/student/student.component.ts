import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-student',
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  students: any = [];
  constructor() {
  }

  ngOnInit() {
    this.students?.push({ name: 'kavya', id: '001', science: '50', maths: '10', english: '20', social: '80', computer: '50', studenttype: 'R' },
      { name: 'Idha', id: '002', science: '50', maths: '30', english: '80', social: '50', computer: '40', studenttype: 'E' },
      { name: 'Yuvin', id: '003', science: '30', maths: '60', english: '40', social: '50', computer: '60', studenttype: 'R' },
      { name: 'Ira', id: '004', science: '40', maths: '30', english: '10', social: '80', computer: '40', studenttype: 'E' },
      { name: 'Kevin', id: '005', science: '50', maths: '50', english: '50', social: '50', computer: '50', studenttype: 'R' },

    )
  }

  calculateGrade(rowdata: any) {

    const marks = rowdata.science + rowdata.maths + rowdata.english + rowdata.social + rowdata.computer;
    const average = marks / 5;
    let grade = '';
    if (rowdata.studenttype == 'E') {
      if (average >= 60) {
        grade = 'Pass';
      }
      else {
        grade = 'Fail';
      }
    }
    else {
      if (average >= 90) {
        grade = 'A+';
      }
      else if (average >= 80) {
        grade = 'A';
      }
      else if (average >= 70) {
        grade = 'B';
      }
      else {
        grade = 'C';
      }
    }
    return grade;
  }

}