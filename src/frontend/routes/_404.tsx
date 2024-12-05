import { Head } from "$fresh/runtime.ts";

export function handler(_: Request): Response {
  return new Response("", {
    status: 303, // 'see other': redirect to the intended page
    headers: { Location: "/" },
  });
}

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
    </>
  );
}
