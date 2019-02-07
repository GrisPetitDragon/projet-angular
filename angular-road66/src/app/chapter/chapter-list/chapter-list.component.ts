import { Chapter } from './../../model/Chapter';
import { ChapterService } from './../chapter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  chapters: Chapter[];
  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.chapterService.getChapters().subscribe(data => {
      this.chapters = data;
      console.log("Chapters : ", data);
    });
  }

}
