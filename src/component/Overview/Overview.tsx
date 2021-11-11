import { DataTable } from "src/component/Table/Table";

export const Overview = () => {
  return (
    <main className="py-16 px-12">
      <h1 className="text-4xl font-bold text-blue-900">Overview</h1>
      <div className="flex flex-col mt-6 space-y-3">
        <span className="text-xl font-normal text-gray-400">Total Pengeluaran</span>
        <span className="text-5xl font-medium text-blue-900">Rp. 1000.000</span>
      </div>
      <div className="mt-8 w-full">
        <DataTable />
      </div>
    </main>
  );
};
