import axios from "axios";
import type { IResource } from "../models/IResource.ts";

export const getResources = async (): Promise<IResource[]> => {
  const res = await axios.get<IResource[]>("/data/sharedResources.json");
  return res.data;
};