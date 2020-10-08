import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import "./buttons.css"

export default function Buttons() {
  return (
    <div className="btn-div">
      <div className="each-btn-div">
      <button className="newMeeting-btn btn">
      <FontAwesomeIcon icon={faVideo} />
        </button>
      </div>
      <div className="each-btn-div">
      <button className="joinMeeting-btn btn">
        <FontAwesomeIcon icon={faPlusSquare}/>
        </button>
        </div>
    </div>
  )
}
