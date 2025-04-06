import React from "react";
import { formateDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Startup = ({ post }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id,
    image,
    description,
    position,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formateDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="/author.png"
            alt="author"
            width={48}
            height={20}
            className="rounded-full"
          />
          {/* <Image src="https://placehold.co/48x48" alt="author" width={48} height={20} className='rounded-full' /> */}
        </Link>
      </div>
      <Link href="{`/startup/${_id}">
        <p className="startup-card_disc">{description}</p>
        <Image
          src="/author.png"
          alt="startup"
          width={100}
          height={100}
          className="startup-card_img"
        />
      </Link>
      <div className="flex justify-between items-center gap-3 mt-5">
        <Link href={`/query=${category.toLowerCase()}`}>
        <p className="text-16-medium">{position}</p>
        </Link>
        
        <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>
            Details
            </Link>
        </Button>
      </div>
    </li>
  );
};

export default Startup;
