import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Quizs} from '../app/trang-thitracnghien/detaisubject';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrangchuquizService {
  // link môn học
  url = '/assets/db/Subjects.json';

  constructor(private http:HttpClient) { }
  getAllSubjects()  {
    return this.http.get(this.url);
    }
    //link chi tiết
    
    getAlldetailSubject(Id: string): Observable<Quizs[]> {
      return this.http.get<Quizs[]>(`/assets/db/` + Id + `.json`);
    }
}
