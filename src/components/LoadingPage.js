import React from 'react'
import "./LoadingPage.scss"
const LoadingPage = React.forwardRef((props, ref) =>
{
  return (
    <div className='loading-page' ref={ref} style={{zIndex: 10000}}>
        <span className="loader"></span>  
    </div>
  )
})
// const LoadingPage = () => {
//   return (
//     <div className='loading-page'>
//         <span className="loader"></span>  
//     </div>
//   )
// }

export default LoadingPage