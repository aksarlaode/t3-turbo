// Generated by prisma/post-generate.ts

import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { nanoid } from "nanoid";

import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;
export type Post = {
  id: string;
  userId: string;
  title: string;
  content: string;
};
export type DB = {
  Post: Post;
};


export const db = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});

export const genId = nanoid;
