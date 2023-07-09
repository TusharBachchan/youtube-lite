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

// import React from 'react';
// import Button from './Button';

// const ButtonList = () => {
//   const buttonList = ["All", "Live", "Computer Programming", "UFC", "Combat sports", "Motivation", "Thoughts", "Music", "Podcasts"];
  
//   return (
//     <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mt-4">
//       {buttonList.map((item, index) => (
//         <Button key={index} buttonTitle={item} />
//       ))}
//     </div>
//   );
// };

// export default ButtonList;

// import React from 'react';
// import Button from './Button';

// const ButtonList = () => {
//   const buttonList = ["All", "Live", "Computer Programming", "UFC", "Combat sports", "Motivation", "Thoughts", "Music", "Podcasts"];

//   return (
//     <div className="mb-32">
//       <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
//         {buttonList.map((item, index) => (
//           <Button key={index} buttonTitle={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ButtonList;

