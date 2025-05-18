export interface IApiResponse {
  data?: unknown;
}

export class ApiResponse implements IApiResponse {
  public data?: unknown;

  constructor(data?: unknown) {
    this.data = data;
  }

  static from(data?: unknown) {
    return new ApiResponse(data);
  }
}
