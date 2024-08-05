import * as request from "../lib/request.js";

const baseUrl = "http://localhost:3030/data/posts";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  return result;
};

export const getOne = async (postId) =>{
    const result = await request.get(`${baseUrl}/${postId}`);
    return result;
}

export const create = async (postData) => {
  const result = await request.post(baseUrl, postData);

  return result;
};