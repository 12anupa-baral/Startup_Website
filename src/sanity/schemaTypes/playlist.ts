import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const playlist = defineType({
  name: "playlist",
  title: "playlist",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "select",
      type: "array",
      of: [{ type: "reference", to: [{ type: "startup" }] }],
    }),
  ],
});
