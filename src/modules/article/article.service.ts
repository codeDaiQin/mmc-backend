import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  getArticleList(): string {
    return 'getArticleList';
  }
}
