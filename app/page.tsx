import Head from "next/head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Separator } from "@/components/ui/separator";
import { ProfileNameHeader } from "@/components/ui/name-header";
import { SocialMedia } from "@/components/ui/social-media";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>J.S Portfolio</title>
        <meta name="description" content="Portfolio for J.S" />
      </Head>

      <main className="container mx-auto px-4 py-10">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold">J.S</h1>
          <p className="text-xl mt-4">
            Fullstack Developer &amp; Software Engineer
          </p>
        </header>

        <section className="grid gap-8">
          <ProfileNameHeader></ProfileNameHeader>
          <Separator></Separator>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="work">Work</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              Learning and mastering the art of building digital products, interfaces, and experiences.
              <SocialMedia></SocialMedia>

            </TabsContent>


            <TabsContent value="work">
              This is my first website project. More info and projects coming soon..
            </TabsContent>
          </Tabs>

        </section>
      </main>
    </div>
  );
}
