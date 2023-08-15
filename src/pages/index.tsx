import Dashboard from "./dashboard";
import { LineGraph } from "@/highcharts/line-graph";


export default function Home() {
  return (
    <>
      <section className="p-4 space-y-4 pb-12 h-auto z-0">
        <div className="md:flex items-center gap-4 md:space-y-0 space-y-2">
          <div className="bg-[#272684] text-white flex items-center justify-center rounded shadow-2xl md:h-28 h-16 md:w-3/12 w-full">
            No. of Beneficiaries
          </div>
          <div className="bg-[#272684] text-white flex items-center justify-center rounded shadow-2xl md:h-28 h-16 md:w-3/12 w-full">
            No. of Beneficiaries
          </div>
          <div className="bg-[#272684] text-white flex items-center justify-center md:h-28 h-16 rounded shadow-2xl md:w-3/12 w-full">
            No. of Beneficiaries
          </div>
          <div className="bg-[#272684] text-white flex items-center justify-center rounded shadow-2xl md:h-28 h-16 md:w-3/12 w-full">
            No. of Beneficiaries
          </div>
        </div>
        <h1 className="text-2xl">Tech Renumeration in Kenya</h1>
        <LineGraph />
      </section>
    </>
  );
}
