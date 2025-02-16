import ClientComponent from "@/componets/client-component";

export default async function page({searchParams}: { searchParams: Promise<{ q: string }> }) {
  const {q} = await searchParams;
  return <div>Search 페이지 : {q}
  <ClientComponent> <></></ClientComponent>
  </div>
}