import Newsletter from "../../components/Newsletter";
import BlogPosts from "./BlogPosts";


export default function Blog() {
  return (
    <main className="relative bg-gray-900 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <BlogPosts />
      <Newsletter />
    </main>
  );
}
