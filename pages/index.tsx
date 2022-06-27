import React from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Head from "next/head";
import Posts from "../components/Posts/Posts";

function Home({ posts }) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Posts posts={posts} />
        </>
    );
}

export async function getStaticProps() {
    // Получил файлы из категории posts
    const files = fs.readdirSync(path.join("posts"));

    // Получил slug и основную информацию из категории posts
    const posts = files.map((fileName) => {
        // Создал slug
        const slug = fileName.replace(".md", "");

        // Получил основную информацию
        const markdownWithMeta = fs.readFileSync(
            path.join("posts", fileName),
            "utf-8"
        );
        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            slug,
            frontMatter,
        };
    });

    return {
        props: {
            posts: posts,
        },
    };
}

export default Home;
