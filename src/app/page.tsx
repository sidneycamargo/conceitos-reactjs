import User from "@/data/user";
import { MyButton } from "../components/MyButton";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bld underline">
        Welcome to my app
      </h1>
      {User.name}
      <MyButton />
    </div>
  );
}
