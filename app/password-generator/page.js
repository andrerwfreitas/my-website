"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react"; 
import PageMargin from "@/components/PageMargin";
import Navbar from "@/components/Navbar";
import Text from "@/components/Text";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12); 
  const [password, setPassword] = useState(""); 

  // Função para gerar a senha
  const generatePassword = (e) => {
    e.preventDefault(); 

    const characters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"?.,;:-_/89%$&€+*«»<>@';
    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      const randomChar = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      generatedPassword += randomChar;
    }

    setPassword(generatedPassword); 
  };
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); 
      })
      .catch((err) => {
        console.error("Erro ao copiar para a área de transferência", err);
      });
  };
  const [copied, setCopied] = useState(false); // Estado para saber se a senha foi copiada

  return (
    <>
      <Navbar />
      <PageMargin>
        <Text variant="h2" className="mb-2">
          Password Generator
        </Text>
        <form onSubmit={generatePassword} className="w-full mb-4">
          <Label className="mb-1">
            Length
          </Label>
          <div className="flex w-full items-center space-x-2">
            <Input
              type="number"
              id="length"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))} 
              min="1"
              className="w-full"
            />
            <Button type="submit" className="cursor-pointer">
              Generate
            </Button>
          </div>
        </form>
        <Label className="mb-1">
          Password
        </Label>
        <div className=" w-full pl-3 py-1 pr-1 border border-neutral-200 rounded-md flex items-center">
          <ScrollArea
            className="flex grow overflow-x-auto font-semibold whitespace-nowrap"
            id="password"
          >
            {password || "[Password]"}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Button
            variant="ghost"
            className="cursor-pointer"
            onClick={copyToClipboard} 
          >
            <Copy
              size={19}
              className={` ${copied ? "text-blue-500" : ""} transition`}
            />
            {copied ? " Copied!" : ""}
          </Button>
        </div>
      </PageMargin>
    </>
  );
};

export default PasswordGenerator;
