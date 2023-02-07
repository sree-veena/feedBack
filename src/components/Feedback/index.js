// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isStatus: false}

  onclickBtn = () => {
    this.setState({isStatus: true})
  }

  feedbackPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <>
        <h1 className="title">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-items">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button className="btn" type="button" onClick={this.onclickBtn}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="btn-emoji"
                />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }

  thankYouPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="greeting">Thank You!</h1>
        <p className="msg">
          We will use you feedback to improve our customer support experience
        </p>
      </div>
    )
  }

  render() {
    const {isStatus} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          {isStatus ? this.thankYouPage() : this.feedbackPage()}
        </div>
      </div>
    )
  }
}
export default Feedback
