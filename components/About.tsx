import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AboutCard from "@/components/AboutCard";

import { config } from "@/config";

export default function About() {
  return (
    <section className="mt-16">
      <Tabs defaultValue="work">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="work">
            Work
          </TabsTrigger>
          <TabsTrigger className="w-full" value="education">
            Education
          </TabsTrigger>
          <TabsTrigger className="w-full" value="extra">
            Extra
          </TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <AboutCard data={config.work} />
        </TabsContent>
        <TabsContent value="education">
          <AboutCard data={config.education} />
        </TabsContent>
        <TabsContent value="extra">
          <AboutCard data={config.extra} />
        </TabsContent>
      </Tabs>
    </section>
  );
}