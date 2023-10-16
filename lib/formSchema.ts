import * as z from "zod";

export const formSchema = z.object({
  searchterm: z.string().min(2, {
    message: "Missing search term",
  }),
});
