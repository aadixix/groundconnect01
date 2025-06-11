import { getPostsByAuthor, getAllAuthors } from '../../../api/services/homeService';
import AuthorPostsPage from '../../components/author/AuthorPostsPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  try {
    const data = await getAllAuthors();

    if (data.rs === 1 && data.rc) {
      return data.rc.map((author) => ({
        username: author.UserName,
      }));
    }
  } catch (error) {
    console.error('Error fetching authors for static params:', error);
  }

  return [];
}

export async function generateMetadata({ params }) {
  const { username } = params;

  try {
    const data = await getPostsByAuthor(username);

    if (data.rs === 1 && data.rc && data.rc.length > 0) {
      const firstPost = data.rc[0];
      const authorName = firstPost.AuthorName;

      return {
        title: `${authorName}'s Articles | Ground Connect`,
        description: `Read all articles written by ${authorName}. Total ${data.rc.length} articles available.`,
      };
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
  }

  return {
    title: 'Author Articles | Ground Connect',
    description: 'Read articles written by the author.',
  };
}

export default async function AuthorPage({ params }) {
  const { username } = params;

  try {
    const data = await getPostsByAuthor(username);

    if (data.rs === 1 && data.rc && data.rc.length > 0) {
      const firstPost = data.rc[0];
      const authorData = {
        AuthorName: firstPost.AuthorName,
        UserName: firstPost.UserName,
        Photo: firstPost.Photo,
      };

      return (
        <AuthorPostsPage authorData={authorData} posts={data.rc} />
      );
    } else {
      notFound();
    }
  } catch (error) {
    console.error('Error fetching author posts:', error);
    notFound();
  }
}
