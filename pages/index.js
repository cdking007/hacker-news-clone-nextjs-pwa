import { Component } from "react";
import Error from "next/error";
import fetch from "isomorphic-fetch";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";
import Link from "next/link";

class Index extends Component {
  state = {};
  // componentDidMount() {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/service-worker.js")
  //       .then((registration) => {
  //         console.log("Service worker registration successful.", registration);
  //       })
  //       .catch((err) =>
  //         console.warn("Service worker registration failed", err.message)
  //       );
  //   }
  // }

  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    try {
      page = +query.page || 1;
      const resp = await fetch(
        "https://node-hnapi.herokuapp.com/news?page=" + page
      );
      stories = await resp.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }
    return { stories, page };
  }

  render() {
    const { stories, page } = this.props;

    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout
        title="Home || Hacker next"
        description="a hacker news clone using nextjs"
      >
        <div>
          <h1>Hacker next</h1>
          <StoryList stories={stories} />
        </div>
        <footer>
          <Link href={`?page=${page + 1}`}>
            <a>Next Page {page + 1} </a>
          </Link>
        </footer>
        <style jsx>
          {`
            footer {
              padding: 1em;
            }

            footer a {
              font-weight: bold;
              color: black;
              text-decoration: none;
              padding: 10px 20px;
              border: 1px solid black;
              border-radius: 2px;
            }
            footer a:hover {
              color: white;
              background: black;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;
