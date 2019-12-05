import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
 
  <div className="container">
     <Head>
      <title>Home</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="hero">
      <h1 className="hero-title">Hasan Korkmaz</h1>
      <div className="hero-social-links">
        <Link href="https://twitter.com/Karaca42Hasan">
          <a className="social-link">Twitter</a>
        </Link>
        <Link href="https://www.youtube.com/channel/UC4r_L3fnwz6siKX0qYRPWLA?view_as=subscriber">
          <a className="social-link">Youtube</a>
        </Link>
        <Link href="https://www.instagram.com/hasankorkmazdev/">
          <a className="social-link">Instagram</a>
        </Link>
        <Link href="https://github.com/Hasan-Korkmaz">
          <a className="social-link">Git</a>
        </Link>
      </div>
    </div>

    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}

    <style jsx>{`
      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .social-link {
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
      }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }

      /* Color Theme Swatches in Hex */
      .turuncu-1-hex { color: #925528; }
      .turuncu-2-hex { color: #F45411; }
      .turuncu-3-hex { color: #F04B19; }
      .turuncu-4-hex { color: #D9430D; }
      .turuncu-5-hex { color: #260701; }
      
      /* Color Theme Swatches in RGBA */
      .turuncu-1-rgba { color: rgba(145, 84, 40, 1); }
      .turuncu-2-rgba { color: rgba(244, 84, 17, 1); }
      .turuncu-3-rgba { color: rgba(239, 75, 24, 1); }
      .turuncu-4-rgba { color: rgba(216, 66, 13, 1); }
      .turuncu-5-rgba { color: rgba(38, 7, 1, 1); }
      
      /* Color Theme Swatches in HSLA */
      .turuncu-1-hsla { color: hsla(25, 56, 36, 1); }
      .turuncu-2-hsla { color: hsla(17, 91, 51, 1); }
      .turuncu-3-hsla { color: hsla(13, 87, 51, 1); }
      .turuncu-4-hsla { color: hsla(15, 88, 45, 1); }
      .turuncu-5-hsla { color: hsla(9, 94, 7, 1); }

    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
