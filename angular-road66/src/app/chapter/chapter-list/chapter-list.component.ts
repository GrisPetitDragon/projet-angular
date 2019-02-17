import { Chapter } from './../../model/Chapter';
import { ChapterService } from './../chapter.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessagingService } from 'src/app/messaging.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  @Output() onChapter = new EventEmitter<number>();

  chapters: Chapter[];

  constructor(private chapterService: ChapterService, private messageService: MessagingService) { }



  ngOnInit() {
    this.chapterService.getChapters().subscribe(data => {
      this.chapters = data;
      console.log("Chapters : ", data);
    });
  }

  onSelect(chapter) {
    console.log(chapter);
    this.messageService.postTime(chapter.pos);
  }

}
