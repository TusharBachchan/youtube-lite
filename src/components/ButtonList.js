import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const buttonList = ["All", "Live", "Computer Programming", "UFC", "Combat sports", "Motivation", "Thoughts", "Music", "Podcasts"]
  return (
    <div className="">
      {buttonList.map((item) => <Button buttonTitle={item}/>)}
    </div>
  )
}

export default ButtonList