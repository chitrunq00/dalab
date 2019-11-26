import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
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
    getAlldetailSubject(Id: string) {
    return this.http.get(`/assets/db/` + Id + `.json`);
    }
}
