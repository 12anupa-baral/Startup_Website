import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  // link: z
  //   .string()
  //   .url()
  //   .refine(async (url) => {
  //     try {
  //       const res = await fetch(url, { method: "HEAD" });
  //       const contentType = res.headers.get("content-type");

  //       return contentType?.startsWith("image/");
  //     } catch {
  //       return false;
  //     }
  //   }),

  link: z
    .string()
    .url()
    .refine(
      // This needs to be a synchronous function
      (url) => {
        // Basic check for image extensions as a synchronous alternative
        const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
        return imageExtensions.some((ext) => url.toLowerCase().endsWith(ext));
      },
      { message: "URL must point to an image (jpg, png, gif, webp)" }
    ),
  pitch: z.string().min(10),
});

