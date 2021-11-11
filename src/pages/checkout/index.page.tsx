import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <>
      <div className="m-auto mt-8 w-2/5">
        <h1 className="text-3xl font-bold text-center text-gray-700">Checkout</h1>
        <div className="mt-6 w-full">
          <h2 className="text-xl font-bold text-gray-700">Detail Belanja</h2>
          <div className="mt-6 space-y-3">
            <p className="flex justify-between text-lg font-normal">
              <span>Nama Produk</span>
              <span>Baju Bayi Ukuran XXL</span>
            </p>
            <p className="flex justify-between text-lg font-normal">
              <span>Kategori</span>
              <span>Baju</span>
            </p>
            <p className="flex justify-between text-lg font-normal">
              <span>Total Barang</span>
              <span>8</span>
            </p>
            <p className="flex justify-between text-lg font-normal">
              <span>Harga Barang</span>
              <span>Rp. 10.000</span>
            </p>
            <p className="flex justify-between text-lg font-normal">
              <span>Total</span>
              <span>Rp. 80.000</span>
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700">Metode Pembayaran</h2>
          <div className="mt-6 space-y-3">
            <p className="flex justify-between text-lg font-normal">
              <span>Tipe Pembayaran</span>
              <span>Transfer</span>
            </p>
            <p className="flex justify-between text-lg font-normal">
              <span>Nama Bank</span>
              <span>BRI</span>
            </p>
            <p className="flex justify-between text-lg font-normal">
              <span>Pemilik Rekening</span>
              <span>Firman Maulana</span>
            </p>
            <p className="flex justify-between text-lg font-normal">
              <span>No Rekening</span>
              <span>4321849949292</span>
            </p>
            {/* <p className="flex justify-between text-lg font-normal">
              <span>Total</span>
              <span>Rp. 80.000</span>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

Index.getLayout = FluidLayout;

export default Index;
