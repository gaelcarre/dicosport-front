import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsService} from '../../../service/news.service';
import {News} from '../../../pojo/News';


import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../../service/error.service';
import { SuccessService } from '../../../service/success.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  private news: News[];

  constructor(private newsService: NewsService, private errorService: ErrorService, private successService: SuccessService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(
        (news: News[]) => {
          console.log(news);
          this.news = news;
          this.successService.changeSuccess('News loaded with success');
        },
        error => this.traiterErreur(error)
      );
  }

  traiterErreur(err: HttpErrorResponse) {
    this.errorService.changeError('Technical Issue: ' + err.message);
  }

  formatdate(date: string): String {
    return (new Date(date)).toUTCString();
  }


}
