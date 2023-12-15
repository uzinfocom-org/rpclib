export type MethodHandler = (context: any) => any;
export type FilterHandler = (context: any) => boolean | Promise<boolean>;

export const kMetadataMethod = Symbol("rpclib.meta.method");
export const kMetadataFilter = Symbol("rpclib.meta.filter");
export const kMetadataHandler = Symbol("rpclib.meta.handler");
export const kMetadataIsPublic = Symbol("rpclib.meta.is-public");

export function PublicMethod(method: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(kMetadataMethod, method, target, key);
    Reflect.defineMetadata(kMetadataIsPublic, true, target, key);
  }
}

export function PrivateMethod(method: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(kMetadataMethod, method, target, key);
    Reflect.defineMetadata(kMetadataIsPublic, false, target, key);
  }
}

export function Filter(filter: FilterHandler | FilterHandler[]) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    if (Reflect.has(target, kMetadataFilter)) {
      const filterMetadata = Reflect.getMetadata(kMetadataFilter, target, key);
      filter = Array.isArray(filter) ? filter : [filter];
      filterMetadata.push(...filter);

      Reflect.defineMetadata(kMetadataFilter, filterMetadata, target, key);
      return;
    }

    filter = Array.isArray(filter) ? filter : [filter];
    Reflect.defineMetadata(kMetadataFilter, filter, target, key);
  }
}
