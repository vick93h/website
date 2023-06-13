import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  @ViewChild('login') loginRef!:ElementRef;

  ngOnInit(): void {

  }

  openLogin() {
    if(this.loginRef.nativeElement.style.display=='block') {
      this.loginRef.nativeElement.style.display = 'none'
    }
    else {
      this.loginRef.nativeElement.style.display = 'block'
    }
  }

  ngAfterViewInit(): void {/*
    console.log("afterinit");
    setTimeout(() => {
      console.log(this.loginRef.nativeElement.innerText);
    }, 1000);*/
    this.loginRef.nativeElement.style.display='none'
  }
}
