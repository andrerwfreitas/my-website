import TextIconCard from "@/components/TextIconCard";
import {
  Code,
  FileText,
  Globe,
  Instagram,
  Key,
  KeyRound,
  Link2,
  MessageCircle,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Text from "@/components/Text";
import PageMargin from "@/components/PageMargin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardMenu from "@/components/CardMenu";

const Home = () => (
  <>
    <PageMargin>
      <div className="flex justify-center">
        <img
          src="/profile-picture.png"
          width={150}
          className="shadow-sm rounded-full mb-5"
        />
      </div>
      <Text variant="h1" className="mb-2 text-center w-full">
        André R W Freitas
      </Text>
      <Text variant="p" className="w-full text-center mb-10">
        Junior front-end developer <br /> I love tech, coding and modern web
        design
      </Text>
      <Text variant="h2" className="mb-2">
        Projects
      </Text>
      <Tabs defaultValue="utilities" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="utilities">Utilities</TabsTrigger>
          <TabsTrigger value="sandbox">Sandbox</TabsTrigger>
        </TabsList>
        <TabsContent value="utilities">
          <CardMenu>
            <Link href="/password-generator">
              <TextIconCard title="Password generator">
                <KeyRound />
              </TextIconCard>
            </Link>
          </CardMenu>
        </TabsContent>
        <TabsContent value="sandbox">
          <CardMenu>
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
