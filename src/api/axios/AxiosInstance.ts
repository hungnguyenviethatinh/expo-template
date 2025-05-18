import axios, {
  AxiosInstance,
  AxiosInterceptorOptions,
  AxiosResponse,
  CreateAxiosDefaults,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios';

import { merge } from 'lodash';

import { apiUrl, apiVersion } from '@/configs/env';
import { PLATFORM_ID } from '@/constants/platform';
import { store } from '@/store';

type OnFulfilledFunc<T> = ((value: T) => T | Promise<T>) | null;
type OnRejectedFunc = ((error: unknown) => unknown) | null;

export class AxiosInstanceBuilder {
  private configs: CreateAxiosDefaults;
  private onRequestFulfilled?: OnFulfilledFunc<InternalAxiosRequestConfig>;
  private onRequestRejected?: OnRejectedFunc;
  private onResponseFulfilled?: OnFulfilledFunc<AxiosResponse>;
  private onResponseRejected?: OnRejectedFunc;

  private requestInterceptorOptions?: AxiosInterceptorOptions;

  constructor() {
    this.configs = {
      baseURL: `${apiUrl}/${apiVersion}/`,
      timeout: 30 * 1000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    this.onRequestFulfilled = async (config: InternalAxiosRequestConfig) => {
      const token: string | undefined = store.getState().auth.accessToken;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    };

    this.onRequestRejected = (error: unknown) => {
      return Promise.reject(error);
    };

    this.onResponseFulfilled = (response: AxiosResponse) => {
      return response;
    };

    this.onResponseRejected = (error: unknown) => {
      if (axios.isCancel(error)) {
        return Promise.reject('Request cancelled: ' + error.message);
      }

      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpStatusCode.InternalServerError) {
          return Promise.reject('Internal server error with message: ' + error.response?.data?.error?.message);
        }

        if (error.response?.status === HttpStatusCode.NotFound) {
          return Promise.reject('The api endpoint was not found.');
        }

        if (error.response?.status === HttpStatusCode.Unauthorized) {
          return Promise.reject('Unauthorized.');
        }

        if (error.response?.status === HttpStatusCode.Forbidden) {
          return Promise.reject('Forbidden.');
        }
      }

      return Promise.reject(error);
    };
  }

  withConfigs(configs?: CreateAxiosDefaults) {
    merge(this.configs, configs);

    return this;
  }

  withRequestFulfilled(onFulfilled?: OnFulfilledFunc<InternalAxiosRequestConfig>) {
    this.onRequestFulfilled = onFulfilled;

    return this;
  }

  withRequestRejected(onRejected?: OnRejectedFunc) {
    this.onRequestRejected = onRejected;

    return this;
  }

  withRequestInterceptorOptions(options?: AxiosInterceptorOptions) {
    this.requestInterceptorOptions = options;

    return this;
  }

  withResponseFulfilled(onFulfilled?: OnFulfilledFunc<AxiosResponse>) {
    this.onResponseFulfilled = onFulfilled;

    return this;
  }

  withResponseRejected(onRejected?: OnRejectedFunc) {
    this.onResponseRejected = onRejected;

    return this;
  }

  build(): AxiosInstance {
    const axiosInstance = axios.create(this.configs);

    axiosInstance.interceptors.request.use(
      this.onRequestFulfilled,
      this.onRequestRejected,
      this.requestInterceptorOptions,
    );

    axiosInstance.interceptors.response.use(this.onResponseFulfilled, this.onResponseRejected);

    return axiosInstance;
  }
}

const defaultAxiosInstance: AxiosInstance = new AxiosInstanceBuilder()
  .withConfigs({
    headers: {
      'X-TIMEZONE-OFFSET': new Date().getTimezoneOffset(),
      'platform-id': PLATFORM_ID,
    },
  })
  .build();

export default defaultAxiosInstance;
