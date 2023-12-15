import { assert } from "chai";
import {
  PublicMethod,
  PrivateMethod,
  FilterHandler,
  Filter,

  kMetadataMethod,
  kMetadataIsPublic,
  kMetadataFilter
} from "../src";

describe("PublicMethod decorator", () => {
  it("should attach proper metadata", () => {
    class TestMethod {
      @PublicMethod("test.method")
      public testMethod() { }
    }

    const instance = new TestMethod();

    const methodMetadata = Reflect.getMetadata(kMetadataMethod, instance, "testMethod")
    assert.equal(methodMetadata, "test.method");

    const isPublicMetadata = Reflect.getMetadata(kMetadataIsPublic, instance, "testMethod")
    assert.equal(isPublicMetadata, true);
  });
});

describe("PrivateMethod decorator", () => {
  it("should attach proper metadata", () => {
    class TestMethod {
      @PrivateMethod("test.method")
      public testMethod() { }
    }

    const instance = new TestMethod();

    const methodMetadata = Reflect.getMetadata(kMetadataMethod, instance, "testMethod")
    assert.equal(methodMetadata, "test.method");

    const isPublicMetadata = Reflect.getMetadata(kMetadataIsPublic, instance, "testMethod")
    assert.equal(isPublicMetadata, false);
  });
});

describe("Filter decorator", () => {
  it("should attach proper metadata", () => {
    const filterFunc: FilterHandler = (context: any) => true;

    class TestMethod {
      @Filter(filterFunc)
      public testMethod() { }
    }

    const instance = new TestMethod();

    const filterMetadata = Reflect.getMetadata(kMetadataFilter, instance, "testMethod")
    assert.deepEqual(filterMetadata, [filterFunc]);
  });

  it("accepts array of filters", () => {
    const filterFunc0: FilterHandler = (context: any) => true;
    const filterFunc1: FilterHandler = (context: any) => true;

    class TestMethod {
      @Filter([filterFunc0, filterFunc1])
      public testMethod() { }
    }

    const instance = new TestMethod();
    const filterMetadata = Reflect.getMetadata(kMetadataFilter, instance, "testMethod")
    assert.deepEqual(filterMetadata, [filterFunc0, filterFunc1]);
  });
});
