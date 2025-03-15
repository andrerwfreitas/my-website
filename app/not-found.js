import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => (
  <>
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-items-center flex-shrink text-center gap-3">
        <Text variant="h1">
          <Link href={"/"}>André R W Freitas</Link>&nbsp;
        </Text>
        <Text variant="p">
          I'm sorry. I didn't find the page you're looking for...
        </Text>
        <Link href={"/"}>
          <Button variant="link">Go back home</Button>
        </Link>
      </div>
    </div>
  </>
);
export default NotFound;
