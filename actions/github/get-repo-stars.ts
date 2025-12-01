import axios, { AxiosResponse } from "axios";

export default async function getGithubRepoStars(): Promise<number> {
  try {

    return 0;
  } catch (error) {
    console.error("Error fetching commits:", error);
    return 0;
  }
}
