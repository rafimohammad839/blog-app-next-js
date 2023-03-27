import { useRouter } from "next/router";
import styles from '@/styles/BlogPost.module.css'
import { useEffect, useState } from "react";

// Step 1: Fetch the file data corresponding to the slug
// Step 2: Display the data

const Slug = (props) => {
  const [data, setData] = useState(props)

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

export async function getServerSideProps(context) {

  const { slug } = context.query;

  const response = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  const blogData = await response.json();

  return {
    props: blogData
  }
}
 
export default Slug;