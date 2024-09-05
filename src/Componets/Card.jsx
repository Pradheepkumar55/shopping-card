import React ,{useState}from 'react'

const Card =({setProductCount,img,title,price}) =>{
    const [btnStatus,setBtnStatus] = useState(false);



    const change = () => {
        setBtnStatus(!btnStatus);
        !btnStatus ? setProductCount(count => count + 1)
          : setProductCount(count => count - 1);
      }


// const change = () => {
//     setBtnStatus((prevStatus) =>{
//         const newStatus = !prevStatus;
//         setProductCount((count) => count +(newStatus ? 1 : -1));
//         return newStatus;
//     });
// };
  return (
    <div className='Card col-xl-4 col-lg-6'>
        <div className='Card-connect'>
            <img src={img} alt="title" />
            <h4 className='mt-3'>{title}</h4>
            <p>{price}</p>
            <button  onClick={change} className={btnStatus ? 'btn border-dark': 'btn btn-dark'}>
                {btnStatus ? "Remove from cart" :"Add to Cart"}
            </button>

        </div>
      
    </div>
  )
}

export default Card;
