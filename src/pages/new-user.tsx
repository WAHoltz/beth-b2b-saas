import Elysia from "elysia";
import { BaseHtml } from "../components/base";
import { ctx } from "../context";
import { redirect } from "../lib";

export const newUser = new Elysia()
  .use(ctx)
  .get("/new-user", async ({ html, session, set, headers }) => {
    if (!session) {
      console.log(session);
      redirect(
        {
          set,
          headers,
        },
        "/login",
      );
      return;
    }

    return html(() => (
      <BaseHtml>
        <div>
          <h1 safe>hi new user {session.user.name}</h1>
          <p>Do you want to join or create an organization?</p>
          <form>
            <input name="organization" placeholder="organization name" />
            <button type="submit">create organization</button>
          </form>
        </div>
      </BaseHtml>
    ));
  });
