export type OnMessageCallback = (message: Uint8Array, context: any) => void;

export abstract class RPCTransport {
  public readonly abstract name: string;

  public abstract onMessage(callback: OnMessageCallback): void;
  public abstract reply(message: Uint8Array, context: any): Promise<void>;

  public abstract launch(): Promise<void>;
  public abstract close(): Promise<void>;
}
