import { Overview } from "src/component/Overview/Overview";
import { Sidebar } from "src/component/Sidebar/Sidebar";

const Index = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#fbfbfb]">
      <Sidebar />
      <Overview />
    </div>
  );
};

export default Index;
