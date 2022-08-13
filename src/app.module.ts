import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { GqlConfigService } from './gql-config.service';

import config from '@/config';

// TypeScript & GraphQL https://docs.nestjs.com/graphql/quick-start
@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true, load: [() => config] }),
    // GraphQLModule.forRootAsync<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   useClass: GqlConfigService,
    // }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
