import { getAssessmentCollection } from "@/services/AssessmentCollection";
import WcWrapper from "@/components/WcWrapper";

export default async function Home() {
  const data = await getAssessmentCollection();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WcWrapper data={data} />
    </main>
  );
}
