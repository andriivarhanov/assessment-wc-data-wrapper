"use client";
import "cm-assessment";
import { useEffect, useRef, useState } from "react";
import { getReccomendations } from "@/services/AlgoliaSearch";

const WcWrapper = ({ data }: { data: any }) => {
  const ref = useRef<any>(null);
  const [item] = data?.assessmentCollection?.items || [];
  const [_recommendations, setRecommendations] = useState<any[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (item) {
      ref.current.intro = item.intro.json.content;
      ref.current.resultsIntro = item.resultsIntro.json.content;
      ref.current.questions = item.questions;
      ref.current.addEventListener(
        "assessmentCompleted",
        async (userAnswers: Record<string, string[]>) => {
          setRecommendations([]);
          setNoResults(false);

          const recommendations = await getReccomendations(userAnswers);
          if (!recommendations) {
            setNoResults(true);
            return;
          }

          setRecommendations(recommendations);
        }
      );
    }
  }, [item]);

  return (
    <div>
      <cm-assessment
        ref={ref}
        name={item?.name}
        slug={item?.slug}
      ></cm-assessment>
      {noResults && <p>No results found</p>}
    </div>
  );
};

export default WcWrapper;
