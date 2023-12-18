import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  ///We can use the cleark authentication for authentication
  return <SignIn />;
}