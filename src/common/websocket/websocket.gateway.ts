import {
  GatewayMetadata,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway<GatewayMetadata>(3001, {
  cors: {
    origin: '*',
  },
})
export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  private getClientQuery(client: Socket): Record<string, unknown> {
    return client.handshake.query;
  }

  // 生命周期钩子 https://docs.nestjs.com/websockets/gateways#lifecycle-hooks
  public async handleDisconnect(client: Socket) {
    const { user_id } = this.getClientQuery(client);
    this.server.emit('disconnected', { disconnected: user_id });
  }

  public async handleConnection(client: Socket) {
    const { user_id } = this.getClientQuery(client);
    console.log(this.getClientQuery(client), 'qqq qqq');

    this.server.emit('connected', { connected: user_id });
  }
}
