"use client";

import Navbar from "@/components/Navbar";
import PageMargin from "@/components/PageMargin";
import Text from "@/components/Text";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Clipboard, ClipboardCheck} from "lucide-react";

const BorderRadius = () => {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`border-top-left-radius: ${topLeft}px; border-top-right-radius: ${topRight}px; border-bottom-left-radius: ${bottomLeft}px; border-bottom-right-radius: ${bottomRight}px;`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Error copying", err);
      });
  };


  return (<>
    <Navbar/>
    <PageMargin>
      <Text variant="h2" className="text-center mb-3">Border radius</Text>
      <Text variant="h3" className="mb-2">Corners (px)</Text>
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div>
          <Label className="mb-1">Top left</Label>
          <Input type="number" onChange={(e) => setTopLeft(e.target.value === "" ? 0 : e.target.value)}/>
        </div>
        <div>
          <Label className="mb-1">Top right</Label>
          <Input type="number" onChange={(e) => setTopRight(e.target.value === "" ? 0 : e.target.value)}/>
        </div>
        <div>
          <Label className="mb-1">Bottom left</Label>
          <Input type="number" onChange={(e) => setBottomLeft(e.target.value === "" ? 0 : e.target.value)}/>
        </div>
        <div>
          <Label className="mb-1">Bottom right</Label>
          <Input type="number" onChange={(e) => setBottomRight(e.target.value === "" ? 0 : e.target.value)}/>
        </div>
      </div>
      <Text variant="h3" className="mb-2">Preview and CSS</Text>
      <div
        className="w-full aspect-[3/2] overflow-x-auto overflow-y-auto border-2 text-nowrap border-neutral-500 p-4 relative"
        style={{
          borderTopLeftRadius: `${topLeft}px`,
          borderTopRightRadius: `${topRight}px`,
          borderBottomLeftRadius: `${bottomLeft}px`,
          borderBottomRightRadius: `${bottomRight}px`,
        }}
      >
        <code>
          {`border-top-left-radius: ${topLeft}px;`}<br/>
          {`border-top-right-radius: ${topRight}px;`}<br/>
          {`border-bottom-left-radius: ${bottomLeft}px;`}<br/>
          {`border-bottom-right-radius: ${bottomRight}px;`}
        </code>
        <Button variant="ghost" className="absolute bottom-2 right-2" size="icon" onClick={copyToClipboard}>
          {copied ? <ClipboardCheck/> : <Clipboard />}
        </Button>
      </div>
    </PageMargin>
  </>)
}

export default BorderRadius;