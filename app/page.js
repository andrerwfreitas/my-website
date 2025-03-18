import TextIconCard from "@/components/TextIconCard";
import {
  FileText,
  KeyRound,
  Terminal,
  Squircle
} from "lucide-react";
import Link from "next/link";
import Text from "@/components/Text";
import PageMargin from "@/components/PageMargin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardMenu from "@/components/CardMenu";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
        Junior front-end developer <br /> I love tech, coding and modern web
        design
      </Text>
      <div className="w-full flex justify-center mb-10">
        <a href="https://github.com/andrerwfreitas" target="_blank" rel="noopener noreferrer">
          <Image alt="github" src="/github-mark.svg" width={30} height={40} />
        </a>
      </div>
      <Text variant="h2" className="mb-2">
        Projects
      </Text>
      <Tabs defaultValue="utilities" className="w-full">
        <TabsList className="w-full">
          <ScrollArea className="whitespace-nowrap overflow-y-scroll">
            <TabsTrigger value="utilities">Utilities</TabsTrigger>
            <TabsTrigger value="sandbox">Sandbox</TabsTrigger>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsList>
        <TabsContent value="utilities">
          <CardMenu>
            <Link href="/password-generator">
              <TextIconCard title="Password generator">
                <KeyRound />
              </TextIconCard>
            </Link>
            <Link href="/border-radius">
              <TextIconCard title="Border radius">
                <Squircle />
              </TextIconCard>
            </Link>
          </CardMenu>
        </TabsContent>
        <TabsContent value="sandbox">
          <CardMenu>
            <Link href="/macos-terminal-window">
              <TextIconCard title="MacOS terminal window">
                <Terminal />
              </TextIconCard>
            </Link>
            <Link href={"/get-post-jsonplaceholder"}>
              <TextIconCard title="Get post from jsonplaceholder API">
                <FileText />
              </TextIconCard>
            </Link>
          </CardMenu>

        </TabsContent>
      </Tabs>
    </PageMargin>
  </>
);
export default Home;
