import { useRouter } from "next/router";
import styles from '@/styles/BlogPost.module.css'
import { useEffect, useState } from "react";
import * as fs from 'fs';

// Step 1: Fetch the file data corresponding to the slug
// Step 2: Display the data

const Slug = (props) => {
  const [data, setData] = useState(props.blogData)

  return (
    <div className={styles.container}>
      <h1>Title of the page: {data?.title}</h1>
      <hr />
      <div className={styles.description}>
        {data?.content}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-javascript' } },
      { params: { slug: 'how-to-learn-flask' } },
      { params: { slug: 'how-to-learn-nextjs' } }
    ],
    fallback: true, 
  }
}

export async function getStaticProps(context) {

  const { slug } = context.params;

  const blogData = fs.readFileSync(`blogdata/${slug}.json`, 'utf-8'); 

  return {
    props: { blogData: JSON.parse(blogData) }
  }
}
 
export default Slug;