import styles from '@/styles/Blog.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them & display the data

const Blog = (props) => {
  const [blogData, setBlogData] = useState(props.allBlogs)

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogs}>
        
        {blogData && blogData.map((blogData, idx) => (

          <div className={styles.blogItem} key={idx}>
            <Link legacyBehavior={true} href={`/blogpost/${blogData.name}`}>
              <a><h3>{blogData.title}</h3></a>
            </Link>
            <p>{blogData.content.substr(0, 200)} ...<Link href={`/blogpost/${blogData.name}`}><b>Read More</b></Link></p>
          </div>

        ))}
        
      </div>
    </div>
  );
}

export async function getServerSideProps() {

  const response = await fetch('http://localhost:3000/api/blogs');
  const allBlogs = await response.json();

  return {
    props: {allBlogs}
  }
}

export default Blog;