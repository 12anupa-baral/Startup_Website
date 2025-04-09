import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type == "startup" && defined(slug.current) && (!defined($search) || category match $search || title match $search || author->name match $search)] | order(_createdAt desc) {
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
      _id,
      _type,
      name,
      image
    }
  }`
);

export const STARTUP_BY_ID_QUERY =defineQuery(
`
  *[_type == "startup" && _id ==$id][0]{
    _id,
    title,
    slug,
    _createdAt,
    author,
    views,
    description,
    category,
    image,
      pitch
  }`
)