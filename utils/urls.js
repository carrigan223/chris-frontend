export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_104FA06248AE6690";

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
