import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrangchuquizService } from '../trangchuquiz.service'

@Component({
  selector: 'app-trang-thitracnghien',
  templateUrl: './trang-thitracnghien.component.html',
  styleUrls: ['./trang-thitracnghien.component.css']
})
export class TrangThitracnghienComponent implements OnInit {

  public quiz: any;
  Subject: any;
  itemperpage: number = 1;
  curpage: number = 1;
  totalPage: number;
  constructor(private route: ActivatedRoute, private quizs: TrangchuquizService) { }
  dongho() {
    var minute = 60;
    var second = 0;

    var clear = setInterval(function () {
      if (minute == 0 && second == 0) {
        console.log(this.outOfTime)
        document.getElementById('dongho').style.display = 'none'
        clearInterval(clear);
        alert('Het gio lam bai');
      }
      else {
        second -= 1
        if (second < 0) {
          minute -= 1;
          second = 59;
        }
        document.getElementById('dongho').innerHTML = minute + 'm: ' + second + 's';
      }
    }, 1000)
  }
  //đếm câu hỏi
  socauhoi() {
    return this.quiz.length;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      const Id = para.get('mid');
      this.quizs.getAlldetailSubject(Id).subscribe(data => this.quiz = data)
      this.dongho()
    });
  }
}
