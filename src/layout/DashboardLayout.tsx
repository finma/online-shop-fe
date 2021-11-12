import type { CustomLayout } from "next";

import { Sidebar } from "../component/Sidebar/Sidebar";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const DashboardLayout: CustomLayout = (page) => {
  return (
    <div className="flex w-full min-h-screen bg-[#fbfbfb]">
      <Sidebar />
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </div>
  );
};
