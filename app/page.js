import Card from "@/components/Card";
import CardDescription from "@/components/CardDescription";
import CardTitle from "@/components/CardTitle";
import LinkButton from "@/components/LinkButton";
import Navbar from "@/components/Navbar";
import PageLimits from "@/components/PageLimits";
import { Layers2 } from "lucide-react";
import Link from "next/link";

const Home = () => (
  <>
    <PageLimits>
      <Navbar />
      <div className="h-2"></div>
      <Link href="/shortcuts">
        <Card>
          <CardTitle className="flex gap-2 items-center">
            My Apple Shortcuts <Layers2 />
          </CardTitle>
          <CardDescription>
            Shortcuts that will help you with various tasks
          </CardDescription>
        </Card>
      </Link>
    </PageLimits>
  </>
);
export default Home;
