import Link from "next/link";
const StoryList = ({ stories }) => {
  return (
    <div className="story-list">
      {stories.map((story) => {
        return (
          <div key={story.id} className="story">
            <h2 className="story-title">
              <a href={story.url} target="_BLANK">
                {" "}
                {story.title}{" "}
              </a>
            </h2>
            <div className="story-details">
              <span>{story.points || 0} points </span>
              <Link href={`/story?id=${story.id}`}>
                <a>{story.comments_count || 0} comments</a>
              </Link>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .story-list {
          padding: 0px 1em;
        }
        .story {
          margin: 0px;
          margin-bottom: 10px;
          display: block;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.5);
        }
        .story:hover {
          transform: scaleY(1.2);
        }
        .story-title {
          font-size: 1em;
          margin: 0;
          font-weight: 400;
          margin-bottom: 8px;
        }
        .story-title a {
          text-decoration: none;
          color: #333;
        }
        .story-title a:hover,
        .story-details a:hover {
          text-decoration: underline;
        }
        .story-details {
          font-size: 0.8em;
          font-weight: bold;
        }
        .story-details span {
          margin-right: 1em;
        }
        .story-details a {
          color: #6600ff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default StoryList;
