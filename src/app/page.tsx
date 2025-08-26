import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DateTime } from "@/components/ui/dateTime";
import Image from "next/image";
import { Author } from "./_components/author";

export type Post = (typeof mockPosts)[number];

const mockPosts = [
  {
    id: 1,
    parentId: null,
    threadRootId: null,
    author: {
      firstName: "John",
      lastName: "Doe",
      userName: "johndoe",
      avatar: "https://avatars.githubusercontent.com/u/123456?v=4",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    contentChildren: [],
    updatedAt: new Date(),
    bookmarked: false,
  },
  {
    id: 2,
    parentId: null,
    threadRootId: null,
    author: {
      firstName: "Jane",
      lastName: "Doe",
      userName: "janejane",
      avatar: "https://avatars.githubusercontent.com/u/654321?v=4",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    contentChildren: [],
    updatedAt: new Date(),
    bookmarked: false,
  },
  {
    id: 3,
    parentId: null,
    threadRootId: null,
    author: {
      firstName: "Betty",
      lastName: "Booper",
      userName: "dabooper",
      avatar: "https://avatars.githubusercontent.com/u/12356?v=4",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    contentChildren: [],
    updatedAt: new Date(),
    bookmarked: false,
  },
];

export default function Page() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {mockPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <Author {...post.author} />
            </CardHeader>
            <CardContent>
              {post.text}
              {/*{renderContentChildren(post.contentChildren)}*/}
            </CardContent>
            <CardFooter>
              <DateTime
                timestamp={post.updatedAt}
                formatOptions={{
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }}
              />
            </CardFooter>
          </Card>
        ))}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          href="https://github.com/johnsoncodehk/volar-playground"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/github.svg" alt="GitHub" width={24} height={24} />
        </a>
        <a
          href="https://twitter.com/johnsoncodehk"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
        </a>
      </footer>
    </div>
  );
}
