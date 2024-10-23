import { Spin } from "antd";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full flex justify-center">
      <Spin />
    </div>
  );
}
