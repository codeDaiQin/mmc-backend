import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('Test AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        JwtModule.register({
          secret: 'mmc',
          signOptions: { expiresIn: '60s' },
        }),
      ],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should sign token', () => {
    const token = service.createToken('user_id');
    console.log(`token:`, token);
    expect(token).toBeDefined();
  });
});
