import { db } from "~/server/db";

const APPID = "2n2oidugi5";

export const dynamic = 'force-dynamic';

const mockFileKeys = [
  "pt1xwxr3Ck9j3tnuPTORb6tMQpJXVfjZU8gHASLIoaDkE9On",
  "pt1xwxr3Ck9jhk7F6D0BG1R7DFmHkO34YTioq9ZWrNM8Kc6A",
  "pt1xwxr3Ck9jQN8FLuwUvkp4c2WsgNJbSqQAaxo7jZM9zuEd",
  "pt1xwxr3Ck9jh6HZLm0BG1R7DFmHkO34YTioq9ZWrNM8Kc6A",
];

const mockImages = mockFileKeys.map((fileKey, index) => ({
  id: index + 1,
  url: `https://utfs.io/f/${fileKey}`,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
