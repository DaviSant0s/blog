import Container from '@/components/Container';
import Header from '@/components/Header';
import PostFeatured from '@/components/postFeatured';
import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />  
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é o Footer</h1>
      </footer>
    </Container>
  );
}
