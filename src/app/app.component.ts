import { Component,ViewChild ,AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';
import { every } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AngularIntro';
  parentMessage:string="message change"
  message:string | undefined;
  fromChildOutPut:string | undefined;
  @ViewChild(PostComponent) childComp: any;

  constructor(){
    console.log(this.childComp)
  }
  ngAfterViewInit(): void {
    console.log(this.childComp)
    this.message = this.childComp.childMessage

  }

  reciveMessage($event: any){
   
    this.fromChildOutPut=$event
  }
}
