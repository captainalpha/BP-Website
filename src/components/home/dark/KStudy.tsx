import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";

interface IProps {
  data: IKStudy[];
}
const KStudy = ({ data }: IProps) => {
  return (
    <div>
      <div>
        <div className="w-full py-4">
          <StickyScroll data={data} />
        </div>
      </div>
    </div>
  );
};

export default KStudy;
