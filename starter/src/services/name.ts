import { Effect, Layer, Context } from "~/lib";

export interface NameService {
  getName: Effect.Effect<never, never, string>;
}

export const NameService = Context.Tag<NameService>();

export const NameServiceLive = Layer.succeed(NameService, {
  getName: Effect.succeed("Mike"),
});
