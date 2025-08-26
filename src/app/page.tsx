import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DateTime } from "@/components/ui/dateTime";
import Image from "next/image";
import { Author } from "./_components/author";
import { P } from "@/components/ui/typography";

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
              <P>{post.text}</P>
              {/*{renderContentChildren(post.contentChildren)}*/}
            </CardContent>
            <CardFooter>
              <DateTime
                className="text-muted-foreground"
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
    </div>
  );
}
