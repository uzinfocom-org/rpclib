export type MessageType = Uint8Array | string | object;
export type OnMessageCallback = (message: MessageType) => void;

export abstract class RPCTransport {
  public readonly abstract name: string;

  public abstract onMessage(callback: OnMessageCallback): void;
  public abstract reply(message: MessageType): Promise<void>;

  public abstract launch(): Promise<void>;
  public abstract close(): Promise<void>;
}
