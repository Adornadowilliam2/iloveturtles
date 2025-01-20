import React from 'react'

export default function Home() {
  return (
    <div>
      <nav className="p-2 text-white bg-[#007bff] flex items-center justify-between">
        <div>Turtles</div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className='bg-[url("https://th.bing.com/th/id/OIP.6lpn4Z2LkvzbsdVAlIPbJgHaFj?rs=1&pid=ImgDetMain")] h-[80vh] bg-no-repeat bg-center bg-cover flex justify-center items-center'>
        <h1 className="bg-[#f0eeeeb7] p-3 lg:text-[3rem] sm:text-[1rem]">
          Love the Turtles
        </h1>
      </main>
      <section className="flex flex-wrap items-stretch">
        <div className="w-[200px] block m-auto mt-2 border border-black p-4 hover:bg-[#ccc]">
          <img
            src="https://th.bing.com/th/id/OIP.0-Wdcy2haE6rQMSRS5xq9gHaHa?rs=1&pid=ImgDetMain"
            alt="i like turtle meme image"
          />
          <h2 className="uppercase font-bold">i like turtle</h2>
          <h3 className="text-[14px]">meme video</h3>
          <h4 className="text-[12px]">
            click here for video{" "}
            <a
              href="https://youtu.be/KWotO76SuXE"
              className="text-[#007bff] border-none"
            >
              https://youtu.be/KWotO76SuXE
            </a>
          </h4>
        </div>
        <div className="w-[200px] block m-auto mt-2 border border-black p-4 hover:bg-[#ccc]">
          <img
            src="https://i1.sndcdn.com/artworks-ibRanO3vLofKkkZ2-dx6oXA-t500x500.jpg"
            alt="i like turtle meme image"
          />
          <h2 className="uppercase font-bold">Squirtle saxophone</h2>
          <h3 className="text-[14px]">meme video</h3>
          <h4 className="text-[12px]">
            click here for video{" "}
            <a
              href="https://www.youtube.com/watch?v=D_m-G5vt41s"
              className="text-[#007bff] border-none"
            >
              https://www.youtube.com/watch?v=D_m-G5vt41s
            </a>
          </h4>
        </div>
        <div className="w-[200px] block m-auto mt-2 border border-black p-4 hover:bg-[#ccc]">
          <img
            src="https://th.bing.com/th/id/OIP.Zrw0aKBNu-IdozTfmkA8HQAAAA?w=360&h=360&rs=1&pid=ImgDetMain"
            alt="i like turtle meme image"
          />
          <h2 className="uppercase font-bold">turtle huh</h2>
          <h3 className="text-[14px]">meme video</h3>
          <h4 className="text-[12px]">
            click here for video{" "}
            <a
              href="https://www.youtube.com/watch?v=Yx6s8bg3mk4"
              className="text-[#007bff] border-none"
            >
              https://www.youtube.com/watch?v=Yx6s8bg3mk4
            </a>
          </h4>
        </div>
      </section>
    </div>
  );
}
