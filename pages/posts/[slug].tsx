import React from "react";
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import {marked} from "marked";

const PostPage = ({content}) => {

    return (
        <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace('.md', '')
        }
    }))

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    // Получил основную информацию
    const markdownWithMeta = fs.readFileSync(path.join("posts", slug + '.md'), "utf-8");

    const { data: frontMatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontMatter,
            slug,
            content
        }
    }
}

export default PostPage;