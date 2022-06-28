import React from "react";

import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import {marked} from "marked";
import styles from './PostPage.module.css';

const PostPage = ({frontMatter, slug, content}) => {

    return (
        <div className={styles.content}>
            <div className={styles.content__header}>
                <img className={styles.content__header__img} src={frontMatter.cover_image} alt=""/>
                <p className={styles.content__header__title}>{frontMatter.title}</p>
                <p className={styles.content__header__date}>{frontMatter.date}</p>
            </div>
            <div className={styles.content__main} dangerouslySetInnerHTML={{__html: marked(content)}}></div>
        </div>
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