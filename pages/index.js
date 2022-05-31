import Link from "next/link";

function LandingPage() {
  return (
    <div className="h-screen landing-page">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <h1 className="p-20 flex text-white font-bold text-6xl">FindEdu</h1>
        <ul className="flex gap-5 p-20 text-white text-xl">
          <li>+(233) 059 164 1611</li>
          <li>info@findedu.org.gh</li>
        </ul>
      </div>
      <div className="flex flex-row ">
        <div className="border-r-2">
          <ul className="flex flex-col gap-5 p-20 text-white text-xl py-20 gap-20">
            <li>
              <Link href="/home">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/clients">CLIENTS</Link>
            </li>
            <li>
              <Link href="/login">LOGIN</Link>
            </li>
            <li>
              <Link href="/signUp">SIGN UP</Link>
            </li>
          </ul>
        </div>
        <div className="p-20">
          <h1 className="text-teal-600 montserrat font-bold text-6xl ">
            SIMPLE, INTEGRATED <br />
            SCHOOL SEARCH SOLUTION
          </h1>
          <p className=" py-20 text-white text-3xl">
            Seamless search engine, right information <br /> and easy navigation
            to your choicest school across the country
          </p>
          <button className=" py-2 px-3 text-white text-xl bg-teal rounded-lg border-2 border-solid border-white">
            GET STARTED
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default LandingPage;
