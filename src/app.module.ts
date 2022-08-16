import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ChatModule } from '@/modules/chat/chat.module';
import { AuthModule } from '@/modules/auth/auth.module';

// TypeScript & GraphQL https://docs.nestjs.com/graphql/quick-start
@Module({
  imports: [ChatModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
