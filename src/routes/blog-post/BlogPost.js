import { useEffect, useState } from "react";
import blogPostsData from "../../data/blogPostsData";

function BlogPost() {
    const [post, setPost] = useState({ title: '', date: '', imageUrl: '', readingTime: '', author: '', blogPost: '' })

    const findPost = (href) => {
        setPost(blogPostsData.filter((post) => post.href === href)[0]);
    }
    useEffect(() => {
        findPost(window.location.pathname);
    }, [post])

    return (
        <main className="relative bg-gray-900 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <section className="max-w-4xl mx-auto flex flex-col gap-4">
                <img
                    className="w-full h-80 object-cover"
                    src={post.imageUrl}
                    alt=""
                    aria-hidden="true"
                />
                <section className="mt-6 flex items-center">
                    <section className="flex-shrink-0">
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt="" />
                    </section>
                    <section className="ml-3">
                        <p className="text-sm font-medium text-white">{post.author.name} </p>
                        <section className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.datetime}>{post.date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{post.readingTime} read</span>
                        </section>
                    </section>
                </section>
                <h2 className="text-4xl font-semibold text-white text-center">{post.title}</h2>
                <p className="text-base text-gray-500 whitespace-pre-line">{post.blogPost}</p>
            </section>
        </main>

    )
}

export default BlogPost;