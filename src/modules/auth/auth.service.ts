import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenType } from '@/types/modules/auth';
import { AuthGuard } from '@nestjs/passport';

type UserType = unknown;

@Injectable()
export class AuthService extends AuthGuard('jwt') {
  constructor(private readonly jwtService: JwtService) {
    super();
  }

  public createToken(user_id: string): TokenType {
    return {
      access_token: this.jwtService.sign({ uuid: user_id }),
      expires: 3000,
    };
  }

  public async verifyToken(token: string): Promise<[boolean, null | UserType]> {
    const user = await console.log(token);
    const valid = true;
    return [valid, valid ? user : null];
  }

  async login(code: string) {
    if (code.length !== 6) {
      // 验证码必须6位
      return;
    }
    const userMap = new Map<string, string>();
    // 从缓存中读取对应的用户信息
    const user = userMap.get(code);

    if (!user) {
      // 找不到用户 验证码错误
      return;
    }

    return {
      access_token: this.jwtService.sign(user),
    };
  }

  async refreshToken(token: string) {
    console.log(token);
  }
}
