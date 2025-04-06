import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type == "startup" && defined(slug.current)] |order(_createdAt desc) {
   _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    views,
    description,
    category,
    image,
    pitch,
    author->{
      name,
      image
    }
}
`
);
