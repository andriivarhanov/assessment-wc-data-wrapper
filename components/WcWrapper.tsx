"use client";
import "cm-assessment";
import { useEffect, useRef } from "react";

const WcWrapper = ({ data }: { data: any }) => {
  const ref = useRef<any>(null);
  const [item] = data?.assessmentCollection?.items || [];

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (item) {
      ref.current.intro = item.intro.json.content;
      ref.current.resultsIntro = item.resultsIntro.json.content;
      ref.current.questions = item.questions;
    }
  }, [item]);

  return (
    <div>
      <cm-assessment
        ref={ref}
        name={item?.name}
        slug={item?.slug}
      ></cm-assessment>
    </div>
  );
};

export default WcWrapper;
