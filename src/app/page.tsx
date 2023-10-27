import Image from 'next/image'
import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <main>
      <h1>🤝</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

// export default function Home() {
//   return (
//     <main>
//       <Page />
//       <h1 className='font-body '>Hello</h1>
//     </main>
//   )
// }
