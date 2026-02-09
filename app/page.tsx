"use client";

import Head from "next/head";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Email, TabControls } from "@/components/portfolio";
import FadeAnimation from "@/components/fade-animation";
import ActionGroup from "@/components/action-group";
import {
  GrLinkedin,
  GrMail,
  GrGithub,
  GrCertificate,
  GrProjects,
} from "react-icons/gr";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

const tabs = ["about", "work"];

export default function Home() {
  const searchParams = useSearchParams();

  const getInitialTab = (): string => {
    const param = searchParams.get("t");
    return tabs.includes(param ?? "") ? param! : tabs[0];
  };

  const [tab, setTab] = useState<string>(getInitialTab);

  const handleTabChange = (newTab: string) => {
    if (!tabs.includes(newTab)) return;
    if (tab !== newTab) setTab(newTab);

    const currentParam = searchParams.get("t");
    if (currentParam !== newTab) {
      const newParams = new URLSearchParams(window.location.search);
      newParams.set("t", newTab);
      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.replaceState(null, "", newUrl);
    }
  };

  useEffect(() => {
    const param = searchParams.get("t");
    if (param && tabs.includes(param) && param !== tab) setTab(param);
  }, [searchParams, tab]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors font-roboto">
      <Head>
        <title>J.S Portfolio</title>
        <meta name="description" content="Portfolio for J.S" />
      </Head>

      <main className="flex-1 container mx-auto px-4 sm:px-6 md:px-8">
        <header className="flex justify-center items-center flex-wrap py-6">
          <h2
            className="whitespace-nowrap text-3xl md:text-6xl font-orbitron px-4 pb-4 rounded-lg text-center"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            {process.env.NEXT_PUBLIC_PROFILE_NAME ?? "John Doe"}
          </h2>
          <DarkModeToggle />
        </header>

        <Separator />

        <section id="portfolio" className="min-h-[80vh]">
          <Tabs
            defaultValue={tabs[0]}
            value={tab}
            className="max-w-4xl mx-auto"
          >
            <TabControls
              tabs={tabs}
              currentTab={tab}
              onTabChange={handleTabChange}
              triggerBaseClass="transition-all duration-500 ease-in-out px-4 py-2 rounded-md font-medium"
              activeClass="text-gray-600 dark:text-gray-300"
              inactiveClass="text-blue-900 dark:text-blue-400"
            />

            <TabsContent
              value="about"
              className="mt-6 text-base sm:text-lg md:text-xl transition-all"
            >
              <div className="min-h-[60vh]">
                Learning and mastering the art of building digital products,
                interfaces, and experiences.
              </div>

              <FadeAnimation fadeIn={true} fadeOut={true}>
                <ActionGroup
                  direction="responsive"
                  size="md"
                  actions={[
                    {
                      icon: <GrGithub />,
                      label: "Github",
                      href: process.env.NEXT_PUBLIC_GITHUB_HREF ?? "/",
                      target: "_blank",
                    },
                    {
                      icon: <GrLinkedin />,
                      label: "LinkedIn",
                      href: process.env.NEXT_PUBLIC_LINKEDIN_HREF ?? "/",
                      target: "_blank",
                    },
                    {
                      icon: <GrMail />,
                      label: "johannes.seitalahti@gmail.com",
                      popoverContent: (
                        <Email email="johannes.seitalahti@gmail.com" />
                      ),
                    },
                  ]}
                />
              </FadeAnimation>
            </TabsContent>

            <TabsContent
              value="work"
              className="mt-6 text-base sm:text-lg md:text-xl transition-all"
            >
              <div className="min-h-[60vh]">
                <h3 className="text-xl font-semibold mb-4">
                  My CV / Work History
                </h3>
                <div
                  className="border rounded-lg overflow-hidden shadow-md w-full"
                  style={{ minHeight: "50vh" }}
                >
                  <iframe
                    src="/cv.pdf"
                    className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
                    title="My CV"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}
