import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const key = process.env.TRELLO_API_KEY;
const token = process.env.TRELLO_API_TOKEN;

export const apiRequest = async <T>(url: string): Promise<T> => {
  const request = await fetch(
    `https://api.trello.com/1/${url}?key=${key}&token=${token}`
  );
  const data = await request.json();
  return data as T;
};
