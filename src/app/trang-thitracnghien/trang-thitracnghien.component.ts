import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrangchuquizService } from '../trangchuquiz.service';
import {Quizs} from '../trang-thitracnghien/detaisubject'

@Component({
  selector: 'app-trang-thitracnghien',
  templateUrl: './trang-thitracnghien.component.html',
  styleUrls: ['./trang-thitracnghien.component.css']
})
export class TrangThitracnghienComponent implements OnInit {

  //public quiz: any;
  Subject: any;
  rowpage = 1;
  page = 1;
  totalPage: number;
  answers = [];
	point = 0;
	  public quiz: Quizs[]= [];
  constructor(private route: ActivatedRoute, private _quizs: TrangchuquizService) { }
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
      this._quizs.getAlldetailSubject(Id).subscribe( data => this.quiz = data)
      this.dongho()
    });
  }
  pointTest() {
		var sum = 0;
		for (var i = 0; i < this.quiz.length; i++) {
			if (this.answers[i] == this.quiz[i].AnswerId) {
				sum += this.quiz[i].Marks;
				this.point = sum;
			}
		}
  }
  nextPage(){
    if (this.quiz.length / this.rowpage > this.page) {
			this.page++;
		}
  }
}
