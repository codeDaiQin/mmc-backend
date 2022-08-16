import { Module } from '@nestjs/common';
import { WsGateway } from './websocket.gateway';

@Module({
  imports: [],
  controllers: [WsGateway],
  providers: [],
})
export class AuthModule {}
