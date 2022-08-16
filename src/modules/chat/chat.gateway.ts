import { WsGateway } from '@/common/websocket/websocket.gateway';
import {
  GatewayMetadata,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway<GatewayMetadata>(3001, {
  cors: {
    origin: '*',
  },
})
export class ChatGateway extends WsGateway {
  connected: Map<string, number>;
  constructor() {
    super();
    this.connected = new Map();
  }

  @SubscribeMessage('message')
  handleMessage(socket: Socket, user_id: string): void {
    this.connected.set(user_id, (this.connected.get(user_id) ?? 0) + 1);
    socket.emit('message', this.connected.get(user_id) ?? '找不到');
  }

  async handleConnection(client: Socket) {
    // 获取room所有用户
    super.handleConnection(client);
  }

  async handleDisconnect(client: Socket) {
    // 从room中删除
    super.handleDisconnect(client);
  }
}
