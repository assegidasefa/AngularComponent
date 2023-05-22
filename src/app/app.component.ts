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
  userName:string | undefined;
  textValue:string = "one way data binding";
  postTitle:string | undefined;
  postDetail:string | undefined;

  postArray: Array<string> = ["post 1","post 2","post 3","post 4"]
  objectArray:Array<any> = [
    {id:1,postTitle:"Post 1"},
    {id:2,postTitle:"Post 2"},
    {id:3,postTitle:"Post 3"},
    {id:4,postTitle:"Post 4"},
  ]

  imgUrl:string='https://picsum.photos/536/354'

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

  buttonClick() {
    console.log("clicked")
  }

  onKeyup($event: any) {
    console.log("onkey up event handler",$event.target.value)
  }

  onKeyupTemplete(username: any) {
    console.log("onkey up event handler",username)
  }

  onkeyupTwoWayDataBinding() {
    console.log("two way",this.userName)
  }

  onewayDBinding(){
     console.log(this.textValue)
  }

  twowayDBinding(){
    console.log(this.textValue)
 }

 postTitleHandler(){
     this.postTitle;
 }


 postDetailHandler() {
    this.postDetail
 }

 addNew() {
  this.objectArray.push({id:6,postTitle:"post 6"})
 }

 onDelete(id: number){
  
  this.objectArray.splice(id,1)
 }
}
