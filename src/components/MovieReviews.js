// Code MovieReviews Here
const Review = ({ title, img_url }) => (
  <div className="review">
    <img src={ img_url } />
    <h3>{ title }</h3>
  </div>
)


export default const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(review => <Review title={book.title} img_url={book.image_url} />) }
  </div>
)
