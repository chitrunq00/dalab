import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trang-dangnhap',
  templateUrl: './trang-dangnhap.component.html',
  styleUrls: ['./trang-dangnhap.component.css']
})
export class TrangDangnhapComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router)  { }
  username =null;
	password =null;
	//dang nhap
	showCheckall: boolean = false;
	showCheck: boolean = false;
	showCheck1: boolean = false;
	showCheckpass: boolean = false;

  configUrl='https://cuong-dev1-api.herokuapp.com/studentsTwo';
	Students: any;
	getConfig() {
	  return this.http.get(this.configUrl);
	}
	ngOnInit() {
		this.getConfig().subscribe(data => {
			this.Students = data
			console.log(data)
		  })
	}
	check() {

		this.Students.forEach(element => {
		
		  if (this.username == null && this.password == null )                                  
		  { 
			return this.showCheckall=true; 
		  } 
		  if (this.password == null )                                  
		  { 
			this.showCheckpass=true;
			return this.showCheckall=false; 
		  } 
		  if (element.username == this.username && element.password == this.password) {
			this.router.navigate(["/header"])
			alert('Wellcome '+ element.fullname)
			return true;
		  }
		 
		});
	  }
}
