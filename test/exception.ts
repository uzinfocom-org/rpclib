import { assert } from "chai";
import {
  RPCException,
  ParseErrorException,
  InvalidRequestException,
  MethodNotFoundException,
  InvalidParamsException,
  InternalErrorException
} from "../src";

describe("RPCException", () => {
  it("should be instance of standard Error and have proper properties", () => {
    try {
      throw new RPCException(-32700, "Parse Error", 1234);
    } catch (exception) {
      assert.ok(exception instanceof Error);
      assert.ok(exception instanceof RPCException);

      const rpcException = exception as RPCException;
      assert.equal(rpcException.rpcCode, -32700);
      assert.equal(rpcException.rpcMessage, "Parse Error");
      assert.equal(rpcException.rpcData, 1234);
    }
  });
});

describe("ParseErrorException", () => {
  it("should be instance of RPCException and have proper properties", () => {
    try {
      throw new ParseErrorException("data");
    } catch (exception) {
      assert.ok(exception instanceof RPCException);

      const rpcException = exception as RPCException;
      assert.equal(rpcException.rpcCode, -32700);
      assert.equal(rpcException.rpcMessage, "Parse Error");
      assert.equal(rpcException.rpcData, "data");
    }
  });
});

describe("InvalidRequestException", () => {
  it("should be instance of RPCException and have proper properties", () => {
    try {
      throw new InvalidRequestException("data");
    } catch (exception) {
      assert.ok(exception instanceof RPCException);

      const rpcException = exception as RPCException;
      assert.equal(rpcException.rpcCode, -32600);
      assert.equal(rpcException.rpcMessage, "Invalid Request");
      assert.equal(rpcException.rpcData, "data");
    }
  });
});

describe("MethodNotFoundException", () => {
  it("should be instance of RPCException and have proper properties", () => {
    try {
      throw new MethodNotFoundException("data");
    } catch (exception) {
      assert.ok(exception instanceof RPCException);

      const rpcException = exception as RPCException;
      assert.equal(rpcException.rpcCode, -32601);
      assert.equal(rpcException.rpcMessage, "Method not found");
      assert.equal(rpcException.rpcData, "data");
    }
  });
});

describe("InvalidParamsException", () => {
  it("should be instance of RPCException and have proper properties", () => {
    try {
      throw new InvalidParamsException("data");
    } catch (exception) {
      assert.ok(exception instanceof RPCException);

      const rpcException = exception as RPCException;
      assert.equal(rpcException.rpcCode, -32602);
      assert.equal(rpcException.rpcMessage, "Invalid params");
      assert.equal(rpcException.rpcData, "data");
    }
  });
});

describe("InternalErrorException", () => {
  it("should be instance of RPCException and have proper properties", () => {
    try {
      throw new InternalErrorException("data");
    } catch (exception) {
      assert.ok(exception instanceof RPCException);

      const rpcException = exception as RPCException;
      assert.equal(rpcException.rpcCode, -32603);
      assert.equal(rpcException.rpcMessage, "Internal error");
      assert.equal(rpcException.rpcData, "data");
    }
  });
});
