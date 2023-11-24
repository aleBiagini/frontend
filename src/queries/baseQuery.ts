import { apiURI } from "../config";
import { BaseEntity } from "../entities/baseEntity";
import { Post } from "../entities/post";

export const get = (query: string): Promise<BaseEntity<Post, any>> => {
    return fetch(`${apiURI}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query }),
      })
      .then(res => res.json())
}