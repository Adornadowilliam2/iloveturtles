import React from 'react'

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[100vh] font-serif">
      <div className="border border-black p-4 rounded-lg">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38b8a1db-9e65-43fc-b026-1d314208a66b/dfriwo9-cda15585-36ce-4215-9c6b-30266f0be769.png/v1/fill/w_894,h_894,q_70,strp/cute_baby_sea_turtle___under_the_sea_by_beachbumpics_dfriwo9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzM4YjhhMWRiLTllNjUtNDNmYy1iMDI2LTFkMzE0MjA4YTY2YlwvZGZyaXdvOS1jZGExNTU4NS0zNmNlLTQyMTUtOWM2Yi0zMDI2NmYwYmU3NjkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8yMBW2OytmgNqA5iq1io1QpiaaThw8YYpUHEg2IMnDA"
          alt="cute turle image"
          className="w-[100px] block m-auto mb-2 rounded-md"
        />
        <h1 className="text-center">Register</h1>
        <div className="mt-2">
          <label htmlFor="username" className="block">
            Username:
          </label>
          <input
            type="text"
            required
            placeholder="Username"
            className="border border-black p-2 w-[100%]"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="username" className="block">
            Password:
          </label>
          <input
            type="password"
            required
            placeholder="Password"
            className="border border-black p-2 w-[100%]"
          />
        </div>
        <div className="bg-[#007bff] text-white p-2 rounded-lg mt-2 text-center">
          <button type="submit">Submit</button>
        </div>
        <div className="text-[12px] text-center mt-2">
          <a href="">
            Already has an account?{" "}
            <span className="text-[#007bff]">Register</span>
          </a>
        </div>
      </div>
    </div>
  );
}
