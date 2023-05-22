import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  title:string = "List of Post"

  @Input() fromParent:string | undefined;
  @Output() messageEvent = new EventEmitter<string>();

  childMessage:string = 'From child component';

  outputChildMessage:string = 'message from child component vi output';

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage)
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
