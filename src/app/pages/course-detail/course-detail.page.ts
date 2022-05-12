import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
import { createExerciseDto, ExerciseDTO } from '../../../app/services/data.dto';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  course: ExerciseDTO;
  courseId: number;
  numberarray = [1,2,3,4,5];
  numex=-1;
  _createExerciseDto=new createExerciseDto();
  tabType = 'details';
  _verificar: boolean=false;

  constructor(private loginService: LoginService, private navCtrl: NavController, private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.courseId = +params.get("id");
    });

    try {
      this.course=new ExerciseDTO();
      this.course.bodyPart="";
      this.course.gifUrl="";
      this.course.equipment="";
      this.course.nameEjercise="";
      this.course.id=-1;
      this.course = await this.loginService.getby(this.courseId).toPromise();


    } catch (error) {

    }


  }

  goBack() {
    this.navCtrl.back();
  }
  async calificar() {
    try {
      this._createExerciseDto=new createExerciseDto();
      this._createExerciseDto.calificacion= (this.numex+1);
      this._createExerciseDto.idexercise=this.courseId
      this._createExerciseDto.idusergym=-1;
      await this.loginService.calificar(this._createExerciseDto).toPromise();

      this.navCtrl.back();
    } catch (error) {

    }

    
  }
  changeRating(idex){
    this.numex=idex;
    this._verificar=true;
  }
}
