import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Author = GetTypeByName<typeof configuration, "author">;
export declare const allAuthors: Array<Author>;

export type Post = GetTypeByName<typeof configuration, "post">;
export declare const allPosts: Array<Post>;

export type Doc = GetTypeByName<typeof configuration, "doc">;
export declare const allDocs: Array<Doc>;

export {};
