import instance from './axios/AxiosInstance';
import AxiosClient from './axios/AxiosClient';
import { IApiResponse, ApiResponse } from './ApiResponse';

const axiosClient = new AxiosClient(instance);

export { GenericAbortSignal } from 'axios';
export { IApiResponse, ApiResponse };
export { axiosClient };
