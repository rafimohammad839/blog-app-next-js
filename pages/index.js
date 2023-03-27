import styles from '@/styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <style jsx>
        {`
          h2 {
            font-size: 2.375rem;
          }
          h3 {
            font-size: 1.75rem;
          }
        `}
      </style>
      

      <div className={styles.container}>
        <div className={styles.blogContainer}>
          <h1 className={styles.heading}><span>Hunting Coder</span></h1>
          <div className={styles.imgContainer}>
            <Image className={styles.myImg} src="/home-img.avif" width={200} height={120} />
          </div>

          <p>A blog for hunting coders by a hunting coder</p>

          <div>
            <h2>Popular Blogs</h2>
            <div className={styles.blogItem}>
              <h3>How to Learn JavaScript in 2022?</h3>
              <p>JavaScript is the language to design logic for the web.</p>
            </div>

            <div className={styles.blogItem}>
              <h3>How to Learn JavaScript in 2022?</h3>
              <p>JavaScript is the language to design logic for the web.</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to Learn JavaScript in 2022?</h3>
              <p>JavaScript is the language to design logic for the web.</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
