import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  console.log(router)
  return (
    <>
      <h1>You do not need to implement this page</h1>
      <div>{JSON.stringify(router.query)}</div>
    </>
  );
}
