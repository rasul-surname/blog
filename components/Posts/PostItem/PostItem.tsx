import React from "react";
import Link from "next/link";
import styles from './PostItem.module.css';

const PostItem = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug}`}>
            <div className={styles.card}>
                <img className={styles.card__img} src={post.frontMatter.cover_image} alt="" />
                <div className={styles.card__text}>
                    <p className={styles.card__text__title}>{post.frontMatter.title}</p>
                    <p className={styles.card__text__date}>{post.frontMatter.date}</p>
                </div>
            </div>
        </Link>
    );
};

export default PostItem;
