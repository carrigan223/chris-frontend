export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

/**
 * Given an image return  the url
 * works for local and deployed strapis
 * @param {any} img
 */

export const fromImageToUrl = (img) => {
  if (!img) {
    return "/vercel.svg";
  }

  if (img.url.indexOf("/") === 0) {
    return `${API_URL}${img.url}`;
  }

  return img.url;
};
