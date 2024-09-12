import Left from "./components/left/left1.jsx";
import Mid from "./components/mid/mid1.jsx"; 
import Right from "./components/right/right1.jsx";
export default function Home() {
  return (
    <>
      <div className="absolute h-[600px] w-full top-0 bg-no-repeat bg-cover bg-fixed bg-bottom" style={{backgroundImage: "url(/gokpinar-golu-aa-1677888.jpg)"}}></div>
      <section className="mt-[440px] sm:mt-[600px]">
        <div className="flex flex-col xl:flex-row">
          <Left />
          <Mid />
          <Right />
        </div>
      </section>
    </>
  )
}
