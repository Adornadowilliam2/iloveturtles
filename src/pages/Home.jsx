import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "i like turtle",
      image: "https://th.bing.com/th/id/OIP.0-Wdcy2haE6rQMSRS5xq9gHaHa?rs=1&pid=ImgDetMain",
      alt: "i like turtle meme image",
      link: "https://youtu.be/KWotO76SuXE"
    },
    {
      id: 2,
      name: "Squirtle saxophone",
      image: "https://i1.sndcdn.com/artworks-ibRanO3vLofKkkZ2-dx6oXA-t500x500.jpg",
      alt: "squirtle meme",
      link: "https://www.youtube.com/watch?v=D_m-G5vt41s"
    },
    {
      id: 3,
      name: "turtle huh",
      image: "https://th.bing.com/th/id/OIP.Zrw0aKBNu-IdozTfmkA8HQAAAA?w=360&h=360&rs=1&pid=ImgDetMain",
      alt: "huh turtle",
      link: "https://www.youtube.com/watch?v=Yx6s8bg3mk4"
    },
    {
      id: 4,
      name: "Tutle panting",
      image: "https://cdn.blerp.com/thumbnails/0f068030-bccb-11ec-b6a7-9ded42fdfaf9",
      alt: "Turtle panting",
      link: 'https://youtu.be/3yMIk9u--lo?si=xVInTJRHphFea-ih'
    },
    {
      id: 5,
      name: "Ninja turtle",
      image: "https://i.ytimg.com/vi/uU_2Dq33cmc/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAAlAADIQj0AgKJD8AEB-AG2CIACgA-KAgwIABABGGUgWChWMA8=&rs=AOn4CLDs_oLcoz21Lnv6VE_y9jZXSXv1FQ",
      alt: "creating a ninja turtle",
      link: "https://www.youtube.com/shorts/uU_2Dq33cmc"
    },
    {
      id: 6,
      name: "Running turte",
      image: "https://img.youtube.com/vi/CwR3V19_xOA/sddefault.jpg",
      alt: "gas gas ost running turtle",
      link: 'https://youtu.be/CwR3V19_xOA?si=B0Wj6ZUsUzJ4NLZE'
    }
  ]


  return (
    <div>
      <nav className="p-5 text-white bg-gray-700 flex items-center justify-between font-bold">
        <div>Turtles</div>
        <ul className="flex gap-4">
          <li><Link onClick={() => navigate("/login")}>Login</Link></li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className='bg-[url("https://www.fisheries.noaa.gov/s3//styles/full_width/s3/dam-migration/hawksbill_sea_turtle.jpg?itok=cxzcge8K")] h-[80vh] bg-no-repeat bg-center bg-cover flex justify-center items-center'>
        <h1 className="bg-[#f0eeeeb7] p-3 lg:text-[3rem] sm:text-[1rem]">
          Love the Turtles
        </h1>
      </main>
      <div>
        <h2 className='bg-gray-600 p-2 text-white text-2xl'>For you</h2>
        <section className="flex flex-wrap items-evenly justify-center bg-gray-600 ">

          {data.map((item) => (
            <div className="w-[200px] block m-auto mt-2 rounded-lg border border-black p-4 bg-[aliceblue]  hover:bg-[#ccc]" key={item.id}>
              <img
                src={item.image}
                alt={item.alt}
                className='mb-2'
              />
              <h2 className="uppercase font-bold">{item.name}</h2>
              <h3 className="text-[14px]">meme video</h3>
              <h4 className="text-[12px]">
                click here for video{" "}
                <a
                  href={item.link}
                  className="text-[#007bff] border-none w-64 break-all"
                >
                  {item.link}
                </a>
              </h4>
            </div>
          ))}

        </section>
      </div>
    </div>
  );
}
