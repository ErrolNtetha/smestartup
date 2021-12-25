import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleLeftLoading = () => (
  <Input loading icon='user' iconPosition='left' placeholder='Search...' />
)

export default InputExampleLeftLoading



// export default function Directory({ BusinessName, intro, ...props}) {
//     // destructure props here
//     const { verified } = props;

//     return (
//         <>
//             <hr />
//             <section className='businessCardContainer'>
//                 <div className="businessCard">
//                     <section>
//                         <h3> {BusinessName} </h3>
//                         <p> 3/5 </p>
//                     </section>
//                     <hr />
//                     <section>
//                         <p> {intro} </p>
//                         <p> {props.another} </p>
//                     </section>
//                     <section>
//                         <h5> {verified} </h5>
//                         <Link to='/businesses/:id'> View Details </Link>
//                     </section>
//                 </div>
//             </section>
//         </>
//     )
// }
