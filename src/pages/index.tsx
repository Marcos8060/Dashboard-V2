import { Column, Item, SearchPanel, Toolbar } from "devextreme-react/data-grid";
import { DataGrid } from "devextreme-react";

export default function Home() {
  return (
    <>
      <section className="p-4 space-y-4 bg-[#DFEAF0] pb-12 h-auto z-0">
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
        <DataGrid
          // dataSource={transactions}
          allowColumnReordering={true}
          rowAlternationEnabled={true}
          showBorders={true}
          height={"70vh"}
          className="shadow-2xl rounded-xl z-0"
        >
          <Column dataField="name" caption="From Account" />
          <Column dataField="amount" caption="Amount" />
          <Column dataField="transaction" caption="Transaction" />
          <Column dataField="client" caption="Client Number" />
          <Column dataField="reference" caption="Transaction Refrence" />
          <Column dataField="date" caption="Transaction Date" />
          <Column dataField="response" caption="Response" />
          <Toolbar>
            <Item location="after" name="searchPanel" />
          </Toolbar>
        </DataGrid>
      </section>
    </>
  );
}
