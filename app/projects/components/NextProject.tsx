"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/utils/constants/endpoints";

export default function NextProject({ id }: { id: string }) {
  const { inView, ref } = useInView({
    threshold: 0.5,
  });

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!inView) return;
    (async () => {
      try {
        const response = await fetch(`${projects}/${id}.json`);
        const data = await response.json();
        console.log(data);
        if (!data) return;
        setProject(data);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, [inView]);

  // if (!project) return null;

  return (
    <div ref={ref} className="w-full md:flex md:items-center">
      <Link
        href={"2"}
        className="flex items-center gap-3 p-2 pr-6 mx-auto mb-6 border rounded-xl w-fit md:mx-4 md:ml-auto"
      >
        <div className="relative w-12 h-12 rounded-full overflow-clip">
          <img
            // src={project?.image || ""}
            src={
              "https://raw.githubusercontent.com/BrightKingsley/public-db/main/portfolio/assets/apartment-listing.png"
            }
            alt="next project"
            width={480}
            height={480}
            // fill
            className="object-cover"
          />
        </div>
        <div className="space-y-0">
          <h4>{project?.title}</h4>
          {/* <p>Next Up</p> */}
        </div>
        <span>{"->"}</span>
      </Link>
    </div>
  );
}
