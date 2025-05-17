import PostCoverImage from '../PostCoverImage';
import PostHeading from '../PostHeading';

export default function PostFeatured() {
  const slug = 'qualquer coisa';
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_0.png',
          alt: 'alt da imagem',
          priority: true,
        }}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight "
          dateTime="2025-04-20"
        >
          20/04/2025 10:00
        </time>

        <PostHeading as="h1" url={postLink}>
          This will create the dillinger image and pull{' '}
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          repellat reprehenderit iste veniam sapiente incidunt ex a impedit
          cupiditate voluptatem atque, fugit, odio alias, maiores beatae
          distinctio accusantium? Magni, doloribus.
        </p>
      </div>
    </section>
  );
}
