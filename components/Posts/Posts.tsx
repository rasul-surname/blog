import React from "react";

import dynamic from 'next/dynamic';
const PostItem = dynamic(import('./PostItem/PostItem'), { ssr: false });

import styles from "./Posts.module.css";

const Posts = ({ posts }) => {
    return (
        <div className={styles.cards}>
            {posts.map((post: any, index: number) => {
                return <PostItem key={index} post={post} />
            })}
        </div>
    );
};

export default Posts;
