import Elysia from "elysia";
import { authGroup } from "./(auth)/*";
import { index } from "./index";
import { newUser } from "./new-user";

export const pages: any = new Elysia().use(index).use(authGroup).use(newUser);
