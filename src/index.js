import React from 'react'

import './growl.css'

export const Growl = ({ active, message, autoHide, duration = 3, onDismissed }) => {
  
  const timeToDismiss = duration < 1000 ? duration * 1000 : duration;

  if (autoHide) {
    setTimeout(() => {
      onDismissed();
    }, timeToDismiss)
  }
  return (
    <div className={`growl${active ? " active" : ""}`}>
      {message}
      <div onClick={onDismissed} className="growl-close" />
    </div>
  )
}

export function useGrowl() {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false)
  
  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active) => {
      setGrowlActive(active)
    },
  ]
}