import PostList from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  
  return (
    <div>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é o Header</h1>
      </header>
      <Suspense fallback={<SpinLoader/>}>
        <PostList/>
      </Suspense>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é o Footer</h1>
      </footer>
    </div>
  );
}
