import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write_client";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, account, profile }) {
      const existingUser = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
        id: profile?.id,
      });
      if (existingUser) { 
        await writeClient.create(
          document: {
            _type: "author",
            id: profile?.id,
            name: user?.name,
            email: user?.email,
            image: user?.image,
            bio:profile?.bio ||''
          }
        )
      }
    },

  },
});
