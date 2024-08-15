import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
);

export const getReccomendations = async (
  userAnswers: Record<string, string[]>
) => {
  if (!userAnswers) {
    return null;
  }
  const searchIndex = searchClient.initIndex(
    process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string
  );

  const facetFilters = Object.values(userAnswers)
    .flat()
    .map((value) => `relevantTo:${value}`);

  const data = await searchIndex.search("", {
    facetFilters: facetFilters,
  });

  if (!Boolean(data?.hits?.length)) {
    return null;
  }

  return data.hits;
};
