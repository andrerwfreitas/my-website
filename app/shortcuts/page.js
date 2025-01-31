import Navbar from "@/components/Navbar";
import PageLimits from "@/components/PageLimits";
import { Layers2 } from "lucide-react";
import Card from "@/components/Card";
import CardDescription from "@/components/CardDescription";
import CardTitle from "@/components/CardTitle";

const Shortcuts = () => (
  <>
    <PageLimits>
      <Navbar />
      <div className="w-full flex justify-center my-3 gap-3 border-t items-center border-slate-700 pt-3">
        <h2 className="text-center text-2xl">My Apple Shortcuts</h2>
        <Layers2 />
      </div>
      <Card>
          <CardTitle className="flex gap-2 items-center">
            Markdown to preview (function)<Layers2 />
          </CardTitle>
          <CardDescription>
            Entry: text (Markdown)<br/>
            Action: shows the Markdown text to the user (with the function "Quick look")
          </CardDescription>
        </Card>
    </PageLimits>
  </>
);

export default Shortcuts;
