"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import Text from "@/components/Text";
import PageMargin from "@/components/PageMargin";
import Navbar from "@/components/Navbar";

const ExampleApi = () => {
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPost = async (event) => {
    event.preventDefault();
    setError("");
    setPost(null);
    setLoading(true);

    if (!postId || parseInt(postId) <= 0) {
      setError("Digite um número válido maior que 0.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (!response.ok) throw new Error("Post não encontrado");
      const data = await response.json();
      setPost(data);
    } catch (error) {
      setError("I can't find that post. Try another one.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <PageMargin>
        <Text variant="h2" className="mb-2">
          Get post from jsonplaceholder API{" "}
        </Text>
        <form onSubmit={fetchPost} className="flex flex-col">
          <Label htmlFor="post" className="mb-1">
            Post
          </Label>
          <div className="flex w-full items-center space-x-2">
            <Input
              type="number"
              value={postId}
              onChange={(e) => setPostId(e.target.value)}
              placeholder="Post number"
              min="1"
              required
              className="grow"
            />
            <Button type="submit" disabled={loading} className="cursor-pointer">
              {loading ? <Loader2 className="animate-spin" /> : "Get post"}
            </Button>
          </div>
        </form>

        {/* Mensagem de erro */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Exibir post */}
        {post && (
          <Card className="mt-4 w-full">
            <CardHeader>
              <CardTitle className="text-lg">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.body}</p>
            </CardContent>
          </Card>
        )}
      </PageMargin>
    </>
  );
};

export default ExampleApi;
