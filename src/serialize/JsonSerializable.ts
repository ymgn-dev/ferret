/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class JsonSerializable {
  abstract toJson(property?: any): any;
  abstract fromJson(property?: any): any;
}
