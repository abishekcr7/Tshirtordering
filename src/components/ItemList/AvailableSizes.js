// import React from 'react'

// const AvailableSizes = (props) => {
//     // const [availableL,setAvailableL]=useState(props.l)
//     // const [availableM,setAvailableM]=useState(props.m)
//     // const [availableS,setAvailableS]=useState(props.s)

//     const addL= ()=>{
//         if(props.l <= 0){
//             alert("No Tshirt available in selected size")
//         }
//         else{
//             props.l=props.l-1
//         }
//     }
//     const addM= ()=>{
//             if(props.m <= 0){
//                 alert("No Tshirt available in selected size")
//             }
//             else{
//                 props.m=props.m-1
//             } 
//     }
//     const addS= ()=>{
//         if(props.s <= 0){
//             alert("No Tshirt available in selected size")
//         }
//         else{
//             props.s=props.s-1
//         } 
// }
//   return (
//     <div>
//         <button onClick={addL}>Buy L {props.l}</button>----<button onClick={addM}>Buy M {props.m}</button>----
//         <button onClick={addS}>Buy S {props.s}</button>
//     </div>
//   )
// }

// export default AvailableSizes