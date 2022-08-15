import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  get(): string {
    return 'getArticleList';
  }
}
