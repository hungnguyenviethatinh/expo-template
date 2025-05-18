import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiResponse, IApiResponse } from '../ApiResponse';

export type ResponseParser = {
  parse: (data: unknown) => IApiResponse;
};

export type ErrorHandler = {
  handle: (error: unknown) => void;
};

export default class AxiosClient {
  private readonly instance: AxiosInstance;
  private responseParser: ResponseParser;
  private errorHandler: ErrorHandler;

  constructor(instance: AxiosInstance) {
    this.instance = instance;

    this.responseParser = {
      parse: (data: unknown) => ApiResponse.from(data),
    };

    this.errorHandler = {
      handle: (error: unknown) => {
        if (error instanceof Error) {
          return console.log(error.message);
        }

        return console.log('An unknown error occurred.');
      },
    };
  }

  useResponseParser(parser: ResponseParser) {
    this.responseParser = parser;

    return this;
  }

  useErrorHandler(handler: ErrorHandler) {
    this.errorHandler = handler;

    return this;
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<IApiResponse | undefined> {
    try {
      const response: AxiosResponse = await this.instance.get(url, config);

      return this.responseParser.parse(response.data);
    } catch (error: unknown) {
      this.errorHandler.handle(error);
    }
  }

  async post(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<IApiResponse | undefined> {
    try {
      const response: AxiosResponse = await this.instance.post(url, data, config);

      return this.responseParser.parse(response.data);
    } catch (error: unknown) {
      this.errorHandler.handle(error);
    }
  }

  async postForm(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<IApiResponse | undefined> {
    try {
      const response: AxiosResponse = await this.instance.postForm(url, data, config);

      return this.responseParser.parse(response.data);
    } catch (error: unknown) {
      this.errorHandler.handle(error);
    }
  }

  async put(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<IApiResponse | undefined> {
    try {
      const response: AxiosResponse = await this.instance.put(url, data, config);

      return this.responseParser.parse(response.data);
    } catch (error: unknown) {
      this.errorHandler.handle(error);
    }
  }

  async putForm(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<IApiResponse | undefined> {
    try {
      const response: AxiosResponse = await this.instance.putForm(url, data, config);

      return this.responseParser.parse(response.data);
    } catch (error: unknown) {
      this.errorHandler.handle(error);
    }
  }

  async patch(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<IApiResponse | undefined> {
    try {
      const response: AxiosResponse = await this.instance.patch(url, data, config);

      return this.responseParser.parse(response.data);
    } catch (error: unknown) {
      this.errorHandler.handle(error);
    }
  }

  async patchForm(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<IApiResponse | undefined> {
    try {
      const response: AxiosResponse = await this.instance.patchForm(url, data, config);

      return this.responseParser.parse(response.data);
    } catch (error: unknown) {
      this.errorHandler.handle(error);
    }
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<IApiResponse | undefined> {
    try {
      const response: AxiosResponse = await this.instance.delete(url, config);

      return this.responseParser.parse(response.data);
    } catch (error: unknown) {
      this.errorHandler.handle(error);
    }
  }
}
