import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig }  from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 3000,
    responseType: 'json',
    headers: {} // setting token ...
})

/** can set before request */
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
);

/** can set before request */
instance.interceptors.response.use(
    response => {
        // can catch error 400, 401, 403, 500
      return response;
    },
    error => {
      return Promise.reject(error);
    },
  );

const request = <K>(
    url: string,
    params: AxiosRequestConfig | undefined,
) : Promise<AxiosResponse<K>> => {
    return instance(url, params);
}


export default request;
  