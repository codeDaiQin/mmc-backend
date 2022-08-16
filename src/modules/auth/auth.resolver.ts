import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Token, Auth } from './auth.model';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  @Mutation(() => Auth)
  async login(@Args('code') code: string) {
    const { access_token } = await this.auth.login(code);

    return {
      access_token,
    };
  }

  @Mutation(() => Token)
  async refreshToken(@Args() token: string) {
    return this.auth.refreshToken(token);
  }
}
