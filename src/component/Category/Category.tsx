export const Category = () => {
  return (
    <div className="p-8 mt-2 w-full rounded-xl shadow-md">
      <h1 className="mb-8 text-2xl font-bold text-center text-gray-700">Kategori</h1>
      <div className="flex justify-center space-x-4">
        <div className="w-32 h-32 rounded-lg shadow-md">
          <div className="w-full">
            <img src="/img/1.png" alt="kucing" className="w-full rounded-t-md" />
          </div>
          <h3 className="font-normal text-center">Baju</h3>
        </div>
        <div className="w-32 h-32 rounded-lg shadow-md">
          <div className="w-full">
            <img src="/img/1.png" alt="kucing" className="w-full rounded-t-md" />
          </div>
          <h3 className="font-normal text-center">Baju</h3>
        </div>
        <div className="w-32 h-32 rounded-lg shadow-md">
          <div className="w-full">
            <img src="/img/1.png" alt="kucing" className="w-full rounded-t-md" />
          </div>
          <h3 className="font-normal text-center">Baju</h3>
        </div>
      </div>
    </div>
  );
};
