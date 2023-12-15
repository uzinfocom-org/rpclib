export class RPCException extends Error {
  public rpcCode: number;
  public rpcMessage: string;
  public rpcData: any;

  constructor(code: number, message: string, data: any) {
    super(code + ": " + message);

    this.rpcCode = code;
    this.rpcMessage = message;
    this.rpcData = data;

    Object.setPrototypeOf(this, RPCException.prototype);
  }
}

export class ParseErrorException extends RPCException {
  constructor(data?: any) {
    super(-32700, "Parse Error", data);
  }
}

export class InvalidRequestException extends RPCException {
  constructor(data?: any) {
    super(-32600, "Invalid Request", data);
  }
}

export class MethodNotFoundException extends RPCException {
  constructor(data?: any) {
    super(-32601, "Method not found", data);
  }
}

export class InvalidParamsException extends RPCException {
  constructor(data?: any) {
    super(-32602, "Invalid params", data);
  }
}

export class InternalErrorException extends RPCException {
  constructor(data?: any) {
    super(-32603, "Internal error", data);
  }
}
