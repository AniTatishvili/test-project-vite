import { instance } from "./instance";

export const getPostsData = async () => {
  return (await instance.get(`/endpoint/react/data.json`))?.data;
};
