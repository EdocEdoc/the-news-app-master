import { urls } from "./urls";
import { API_KEY } from "@env";

export const GET_EVERY_NEWS = async (query, page) => {
  try {
    const res = await fetch(
      `${urls.baseUrl}/${urls.end.everything}${
        query ? "?q=" + query : "?q=tech"
      }&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: API_KEY,
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    return { failed: error };
  }
};

export const GET_TOP_NEWS = async (query, loc, page) => {
  try {
    const res = await fetch(
      `${urls.baseUrl}/${urls.end.top}?country=${loc ? loc : "us"}${
        query ? "&q=" + query : ""
      }&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: API_KEY,
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    return { failed: error };
  }
};
