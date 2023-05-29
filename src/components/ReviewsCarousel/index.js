// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  leftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  rightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="unit-container">
        <img src={imgUrl} alt={username} />
        <p className="para1">{username}</p>
        <p className="para">{companyName}</p>
        <p className="para">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReview = reviewsList[activeReviewIndex]
    return (
      <div className="main-container">
        <h1 className="head">Reviews</h1>
        <div className="flex-arrows">
          <button
            type="button"
            className="btn"
            onClick={this.leftArrow}
            data-testId="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderReview(currentReview)}
          <button
            className="btn"
            type="button"
            onClick={this.rightArrow}
            data-testId="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
