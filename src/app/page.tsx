const APPID = "2n2oidugi5";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
