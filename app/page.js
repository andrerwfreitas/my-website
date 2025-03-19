import TextIconCard from "@/components/TextIconCard";
import {
  FileText,
  KeyRound,
  Terminal,
  Squircle, ListChecks
} from "lucide-react";
import Link from "next/link";
import Text from "@/components/Text";
import PageMargin from "@/components/PageMargin";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CardMenu from "@/components/CardMenu";
import Image from "next/image";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import SkillIcon from "@/components/SkillIcon";

const Skills = () => (
  <>
    <SkillIcon skill="html"/>
    <SkillIcon skill="css"/>
    <SkillIcon skill="md"/>
    <SkillIcon skill="next"/>
    <SkillIcon skill="react"/>
    <SkillIcon skill="bootstrap"/>
    <SkillIcon skill="nodejs"/>
    <SkillIcon skill="git"/>
    <SkillIcon skill="github"/>
    <SkillIcon skill="bitbucket"/>
    <SkillIcon skill="figma"/>
    <SkillIcon skill="vscode"/>
    <SkillIcon skill="replit"/>
    <SkillIcon skill="aws"/>
    <SkillIcon skill="vercel"/>
    <SkillIcon skill="stackoverflow"/>
    <SkillIcon skill="tailwind"/>
    <SkillIcon skill="webstorm"/>
  </>
)

const Home = () => (
  <>
    <PageMargin>
      <div className="flex justify-center">
        <Image
          src="/profile-picture.png"
          width={150}
          height={150}
          alt="André R W Freitas"
          className="shadow-sm rounded-full mb-5"
        />
      </div>
      <Text variant="h1" className="mb-2 text-center w-full">
        André R W Freitas
      </Text>
      <Text variant="p" className="w-full text-center mb-3">
        Junior front-end developer <br/> I love tech, coding and modern web
        design
      </Text>
      <div className="w-full flex justify-center mb-8">
        <a href="https://github.com/andrerwfreitas" target="_blank" rel="noopener noreferrer">
          <Image alt="github" src="/github-mark.svg" width={30} height={40}/>
        </a>
      </div>
      <div className="flex flex-col gap-7">
        <section>
          <Text variant="h2" className="mb-2">
            Skills
          </Text>
          <div className="flex flex-wrap gap-2">
            <Skills/>
          </div>
        </section>
        <section>
          <Text variant="h2" className="mb-2">
            Personal projects
          </Text>
          <Tabs defaultValue="utilities" className="w-full">
            <TabsList className="w-full">
              <ScrollArea className="whitespace-nowrap overflow-y-scroll">
                <TabsTrigger value="utilities">Utilities</TabsTrigger>
                <TabsTrigger value="sandbox">Sandbox</TabsTrigger>
                <ScrollBar orientation="horizontal"/>
              </ScrollArea>
            </TabsList>
            <TabsContent value="utilities">
              <CardMenu>
                <Link href="/password-generator">
                  <TextIconCard title="Password generator">
                    <KeyRound/>
                  </TextIconCard>
                </Link>
                <Link href="/border-radius">
                  <TextIconCard title="Border radius">
                    <Squircle/>
                  </TextIconCard>
                </Link>
                <Link href="/to-do">
                  <TextIconCard title="To-do list">
                    <ListChecks />
                  </TextIconCard>
                </Link>
              </CardMenu>
            </TabsContent>
            <TabsContent value="sandbox">
              <CardMenu>
                <Link href="/macos-terminal-window">
                  <TextIconCard title="MacOS terminal window">
                    <Terminal/>
                  </TextIconCard>
                </Link>
                <Link href={"/get-post-jsonplaceholder"}>
                  <TextIconCard title="Get post from jsonplaceholder API">
                    <FileText/>
                  </TextIconCard>
                </Link>
              </CardMenu>

            </TabsContent>
          </Tabs>
        </section>
      </div>
    </PageMargin>
  </>
);
export default Home;
