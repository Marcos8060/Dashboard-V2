import Dashboard from "./statistics";
import { LineGraph } from "@/highcharts/line-graph";

export default function Home() {
  return (
    <>
      <section className="p-4 space-y-4 pb-12 h-auto z-0">
        <h1 className="text-2xl">Highly Demanded Languages in Kenya</h1>
        <div className="md:flex items-center gap-4 md:space-y-0 space-y-2">
          <div className="bg-primary text-white flex items-center justify-center rounded shadow-2xl md:h-28 h-16 md:w-3/12 w-full">
            <p>Python Developers</p>
          </div>
          <div className="bg-primary text-white flex items-center justify-center rounded shadow-2xl md:h-28 h-16 md:w-3/12 w-full">
            <p>JavaScript Developers</p>
          </div>
          <div className="bg-primary text-white flex items-center justify-center md:h-28 h-16 rounded shadow-2xl md:w-3/12 w-full">
            <p>Java Developers</p>
          </div>
          <div className="bg-primary text-white flex items-center justify-center rounded shadow-2xl md:h-28 h-16 md:w-3/12 w-full">
            <p>C# Developers</p>
          </div>
        </div>
        <LineGraph />
      </section>
    </>
  );
}
