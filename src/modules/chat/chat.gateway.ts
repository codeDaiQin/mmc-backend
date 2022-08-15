import {
  GatewayMetadata,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway<GatewayMetadata>(3001, {
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    this.server = server;
  }
  @SubscribeMessage('message')
  handleMessage(socket: Socket, payload: any): any {
    socket.emit('message', payload);
  }

  // 生命周期钩子 https://docs.nestjs.com/websockets/gateways#lifecycle-hooks
  handleDisconnect(client: Socket) {
    // throw new Error('Method not implemented.');
    console.log('handleDisconnect');
    // client.send('断开');
  }

  handleConnection(client: Socket) {
    // throw new Error('Method not implemented.');
    console.log('handleConnection');
    // client.send('连接');
  }
}
