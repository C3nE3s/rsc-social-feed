import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
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
