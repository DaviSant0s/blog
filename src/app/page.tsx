import Container from '@/components/Container';
import Header from '@/components/Header';
import PostHeading from '@/components/PostHeading';
import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="w-full h-full group-hover:scale-105 object-cover object-center transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt=""
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>

          <time className='text-slate-600 block text-sm/tight ' dateTime="2025-04-20">20/04/2025 10:00</time>

          <PostHeading as='h2' url='#'>This will create the dillinger image and pull </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            repellat reprehenderit iste veniam sapiente incidunt ex a impedit
            cupiditate voluptatem atque, fugit, odio alias, maiores beatae
            distinctio accusantium? Magni, doloribus.
          </p>

        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é o Footer</h1>
      </footer>
    </Container>
  );
}
