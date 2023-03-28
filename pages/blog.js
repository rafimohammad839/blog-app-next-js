import { useEffect, useState } from 'react';
import Link from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '@/styles/Blog.module.css';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them & display the data

const Blog = (props) => {
  const [blogData, setBlogData] = useState(props.allBlogs);
  const [count, setCount] = useState(5);

  const fetchMoreData = () => {
    setTimeout(async () => {  
      
      const response = await fetch(`http://localhost:3000/api/blogs?count=${count + 5}`)
      const json = await response.json();
      setBlogData(json.blogItems);
      setCount(prev => prev + 5);
        
    }, 1000)
  }


  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogs}>
        
        <InfiniteScroll
          dataLength={blogData.length}
          next={fetchMoreData}
          hasMore={props.allCount != blogData.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>Yay! You have seen it all.</b>
            </p>
          }
        >
          {blogData && blogData.map((blogData, idx) => (

            <div className={styles.blogItem} key={idx}>
              <Link legacyBehavior={true} href={`/blogpost/${blogData.name}`}>
                <a><h3>{blogData.title}</h3></a>
              </Link>
              <p>{blogData.metadesc.substr(0, 200)} ...<Link href={`/blogpost/${blogData.name}`}><button className={styles.btn}>Read More</button></Link></p>
            </div>

          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export async function getStaticProps() {

  const allBlogs = [];

  const fileNames = fs.readdirSync("blogdata/");
  for (let i = 0; i < 5; i++) {

    const file = fileNames[i];
    const fileData = fs.readFileSync("blogdata/" + file, 'utf-8')
    allBlogs.push(JSON.parse(fileData));

  }

  return {
    props: { allBlogs, allCount: fileNames.length }
  }
}

export default Blog;