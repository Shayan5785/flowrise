import Image from 'next/image'
import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
// import { components } from "@/slices";

export async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  // return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default function Home() {
  return (
    <main>
        <h1 className='font-body '>Hello</h1>
    </main>
  )
}
