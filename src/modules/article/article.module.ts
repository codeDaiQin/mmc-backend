import { Module } from '@nestjs/common';

import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

// TypeScript & GraphQL https://docs.nestjs.com/graphql/quick-start
@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
