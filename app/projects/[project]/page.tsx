import Image from "next/image";
import Link from "next/link";
import React from "react";
import PreviewImages from "../components/PreviewImages";
import { projects } from "@/utils/constants/endpoints";
import NextProject from "../components/NextProject";

<>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere
  accusantium autem impedit omnis nemo perspiciatis vitae dolores ab qui
  maiores, iure similique consequatur eligendi doloribus perferendis aliquid
  dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Quia nisi nulla neque corrupti accusamus? Ut omnis quisquam beatae, voluptas
  aliquid recusandae rem, id amet minus repudiandae ab, similique sequi quidem.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur
  dignissimos est? Vero id, quod ipsum similique amet tenetur, quaerat nobis
  ipsa quisquam, pariatur recusandae voluptatibus dolorem eveniet excepturi
  accusantium.
</>;

const headers = new Headers({
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
});

const getProjectData = async (id: string) => {
  //  const response = await fetch(`${projects}/${params.project}.json`, {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/BrightKingsley/public-db/main/portfolio/data/projects/1.json",
      {
        headers,
      }
    );
    console.log(response);
    const data = (await response.json()) as Project;
    console.log({ projects: `${projects}/${id}.json`, response });
    return data;
  } catch (error) {
    console.error({ error });
    return null;
  }
};

export default async function Project({
  params,
  searchParams,
}: {
  params: { project: string };
  searchParams: { [key: string]: string };
}) {
  const data = await getProjectData(params.project);

  if (!data) return <p>Could not fetch data</p>;

  const sw: Project = {
    features: [
      {
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere accusantium autem impedit omnis nemo perspiciatis vitae dolores ab qui maiores, iure similique consequatur eligendi doloribus perferendis aliquproject dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        heading: "Lorem Ipsum",
        images: ["/images/music-player.png"],
      },
      {
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere accusantium autem impedit omnis nemo perspiciatis vitae dolores ab qui maiores, iure similique consequatur eligendi doloribus perferendis aliquid dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        heading: "Lorem Ipsum",
        images: ["/images/music-player.png"],
      },
      {
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere accusantium autem impedit omnis nemo perspiciatis vitae dolores ab qui maiores, iure similique consequatur eligendi doloribus perferendis aliquid dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        heading: "Lorem Ipsum",
        images: ["/images/music-player.png"],
      },
      {
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere accusantium autem impedit omnis nemo perspiciatis vitae dolores ab qui maiores, iure similique consequatur eligendi doloribus perferendis aliquid dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        heading: "Lorem Ipsum",
        images: ["/images/music-player.png"],
      },
    ],
    image: "/images/music-player.png",
    longDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere
  accusantium autem impedit omnis nemo perspiciatis vitae dolores ab qui
  maiores, iure similique consequatur eligendi doloribus perferendis aliquid
  dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Quia nisi nulla neque corrupti accusamus? Ut omnis quisquam beatae, voluptas
  aliquid recusandae rem, id amet minus repudiandae ab, similique sequi quidem.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur
  dignissimos est? Vero id, quod ipsum similique amet tenetur, quaerat nobis
  ipsa quisquam, pariatur recusandae voluptatibus dolorem eveniet excepturi
  accusantium.`,
    previewImages: [
      "/images/music-player.png",
      "/images/music-player.png",
      "/images/music-player.png",
      "/images/music-player.png",
    ],
    shortDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere accusantium autem impedit omnis nemo perspiciatis vitae dolores ab`,
    techStack: ["react", "typescript", "mongoDB", "express"],
    title: "Chwee",
    theme: "#4c6ef5",
    links: {
      github: "https://github/BrightKingsley/chwee",
      live: "https://chwee.vercel.app",
    },
  };

  return (
    <>
      <div className="w-full py-12 space-y-16 md:space-y-24">
        <section className="group w-[90%] space-y-16 md:space-y-24 mx-auto">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
            <div className="space-y-3 flex-[2]">
              <h1 className="text-4xl font-bold transition-all duration-200 group-hover:text-primary">
                {data.title}
              </h1>
              <p className="capitalize">
                {data.shortDesc}
                <Link href={"?longDesc=true"} className="text-primary">
                  ...See All
                </Link>
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href={data.links.live}
                  className="px-4 py-2 text-white bg-black rounded-md"
                >
                  Live Site
                </Link>
                <Link
                  href={data.links.github}
                  className="px-4 py-2 text-white bg-black rounded-md"
                >
                  Github
                </Link>
              </div>
            </div>
            <div className="flex-[3]">
              <Image
                src={data.image}
                width={1080}
                height={1080}
                alt={data.title}
              />
            </div>
          </div>

          <PreviewImages images={data.previewImages} />
        </section>
        {/* <section className="group w-[90%] mx-auto">
        </section> */}
        <section className="group w-[90%] mx-auto space-y-4">
          <h2 className="text-3xl font-bold transition-all duration-200 group-hover:text-primary">
            Tech Stack
          </h2>
          <div className="">
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {data.techStack.map((tech, i) => (
                <li key={i} className="list-disc list-inside">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="group w-[90%] mx-auto space-y-6">
          <h2 className="text-3xl font-bold transition-all duration-200 group-hover:text-primary">
            Features
          </h2>
          <div className="space-y-10 md:space-y-20">
            {data.features.map((feature, i) => (
              <div
                key={i}
                className={`flex flex-col-reverse md:flex-row gap-4 md:gap-8
              ${(i + 1) % 2 === 0 ? "md:flex-row-reverse" : ""}
              `}
              >
                <div className="space-y-3 flex-[3]">
                  <h3 className="text-2xl font-bold">{feature.heading}</h3>
                  <p>{feature.content}</p>
                </div>
                <div className="flex-[4]">
                  <Image
                    src={feature.images[0]}
                    alt=""
                    width={1080}
                    height={1080}
                    className="rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <NextProject id={(+params.project + 1).toString()} />
      </div>
      {searchParams.longDesc === "true" && (
        <div className="fixed inset-0 top-0 left-0 z-10 flex items-center justify-center w-full h-full backdrop-blur-sm">
          <Link
            href={"1"}
            replace
            className="absolute w-full h-full"
            title="close"
          />
          <div className="rounded-md shadow-md bg-white mx-auto w-[93%] h-[90%]_ z-20 h-fit p-3">
            <Link href={"1"} replace>
              close
            </Link>
            <p>{data.longDesc}</p>
          </div>
        </div>
      )}
    </>
  );
}

//
