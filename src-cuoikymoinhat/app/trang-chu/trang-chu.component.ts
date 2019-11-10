import { Component, OnInit } from '@angular/core';
import { TrangchuquizService } from '../trangchuquiz.service';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit {
  itempage:4;
  currpage:number=1;
  public Subjects:any;
  Subject:any;
  pid;  
  page:number =1;

  constructor(private trangchuquiz: TrangchuquizService ) { }

  ngOnInit() {
    this.trangchuquiz.getAllSubjects().subscribe(data => this.Subjects = data);
this.Subject= this.Subjects.find(p=>p.Id=== this.pid); 
console.log(this.Subject)
  }
}
