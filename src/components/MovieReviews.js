// Code MovieReviews Here
const Review = ({ title, headline, summary, date }) => (
  <div className="review">
    <h3>{ title }</h3>
    <h3>{ headline }</h3>
    <p>{ summary } - Published on: {date}</p>
  </div>
)


export default const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(review => <Review title={review.display_title} headline={review.headline} summary={review.summary_short} date={review.publication_date}/>) }
  </div>
)
