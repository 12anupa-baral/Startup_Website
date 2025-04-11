import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from "@/sanity/lib/write_client";
import { after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
  const { views: totalviews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  //update the number of views
  after(
    async () =>
      await writeClient
        .patch(id)
        .set({
          views: totalviews + 1,
        })
        .commit()
  );

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">views :{totalviews}</span>
      </p>
    </div>
  );
};

export default View