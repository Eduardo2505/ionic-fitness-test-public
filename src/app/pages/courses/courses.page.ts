import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../../../app/services/login.service';
import { BuscarDTO, ExerciseDTO, ExerciseResultDto, Pagination } from '../../../app/services/data.dto';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.page.html',
  styleUrls: ['courses.page.scss']
})
export class CoursesPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  tabType = 'Beginner';

  courses: ExerciseResultDto;
  _take: number = 10;
  _resultList: ExerciseDTO[];
  buscar: string;
  _cargando: boolean;

  pag: Pagination = {
    page: 1,
    maxSize: 5, // paginas a mostrar
    collectionSize: 0, // cantidad de elementos detectados
    mostrarCantidad: false,
    maxCount: 10,
    pageSize: this._take
  };
  _plus: number = 1;

  constructor(private loginService: LoginService, private router: Router) { }



  ngOnInit(): void {
    this.loadDatax();
    this.buscar = "";
    this._cargando = false;
  }


  async loadData(event) {

   

    const buscarDTO = new BuscarDTO();
    buscarDTO.page = this._plus;
    buscarDTO.buscado = this.buscar;
    this.courses = await this.loginService.exercise(buscarDTO).toPromise();
    this.pag.collectionSize = this.courses.count;
    this._cargando = true;
    if (this.courses.list.length == 0) {
      if (event) event.target.complete();
      return;
    } else if (this._plus !== this.pag.collectionSize) {
      this._plus++;
    } else {
      if (event) event.target.disabled = true;
    }
    this._resultList = this._resultList.concat(this.courses.list);
    if (event) event.target.complete();


  }

  async loadDatax() {




    try {
      this._plus = 1;
      const buscarDTO = new BuscarDTO();
      buscarDTO.page = this._plus;
      buscarDTO.buscado = this.buscar;
      this._resultList = [];
      this.courses = await this.loginService.exercise(buscarDTO).toPromise();
      this.pag.collectionSize = this.courses.count;
      this._resultList = this.courses.list;
      this._cargando = true;
      this._plus++;
    } catch (error) {



    }

    //const data = this.dataService.getCoursesByType(type);
    //this.courses = data;
    return this.courses;
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  goToDetail(id) {
    this.router.navigate(['course-detail', id]);
  }

}


