import {AxiosResponse} from "axios";
import {signInResponse} from "../types/authTypes";
import api from "../api";

export const signInService = async (username: string, password: string): Promise<AxiosResponse<signInResponse>> => {
  return api.post<signInResponse>("/sign-in", {username, password});
}


export const signUpService = async (email: string, username: string, password: string): Promise<AxiosResponse<signInResponse>> => {
  return api.post<signInResponse>("/sign-up", {email, username, password});
}


export const logOutService = async (username: string, password: string): Promise<AxiosResponse<signInResponse>> => {
  return api.post<signInResponse>("/log-out");
}
