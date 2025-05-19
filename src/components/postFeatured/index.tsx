import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';

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

      <PostSummary
        createdAt='2025-04-06T00:24:38.616Z'
        postLink={postLink}
        title="Como a escrita pode mudar sua carreira"
        excerpt="Muitas empresas e desenvolvedores individuais escolhem o Next.js justamente porque ele consegue unir simplicidade com recursos avançados."
        postHeading="h1"
      />
    </section>
  );
}
