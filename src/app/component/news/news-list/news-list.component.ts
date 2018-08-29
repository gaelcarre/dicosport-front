import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsService} from '../../../service/news.service';
import {News} from '../../../pojo/News';


import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  private news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(
        (news: News[]) => {
          console.log(news);
          this.news = news;
        },
        error => this.traiterErreur(error)
      );
  }

  traiterErreur(err: HttpErrorResponse) {
    console.log(err);
  }


}
