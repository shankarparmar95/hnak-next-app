import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, Shankar</h1>
      <div>
        <Link href="/menna-o-fena/prayer-needs-mof/subha-mof">
          Go to Product Listing Page
        </Link>{" "}
      </div>
      <div>
        <Link href="/mma-lava-beads-jute-tassel">
          Go to Product Detail Page
        </Link>
      </div>
    </main>
  );
}
