import { Field, ObjectType } from '@nestjs/graphql';
// https://www.graphql-scalars.dev/docs
import { GraphQLJWT } from 'graphql-scalars';
import { User } from '@/modules/users/user.model';

@ObjectType()
export class Token {
  @Field(() => GraphQLJWT, { description: 'JWT access token' })
  accessToken: string;

  @Field(() => GraphQLJWT, { description: 'JWT refresh token' })
  refreshToken: string;
}

@ObjectType()
export class Auth extends Token {
  user: User;
}
