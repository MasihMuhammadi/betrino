import React,{useEffect, useState} from 'react';
import RandomCard from './random_card';

const backface = () =>{
   
   const [first ,setFirst] = useState('d-none');
   const [load ,setLoad] = useState('d-block pt-5 text-center');
   const [spin , setSpin]= useState('d-block text-center ');
 
   const loading = () =>{
      setTimeout(()=>{
         setLoad('d-none');
         setSpin('d-none');
         setFirst('d-inline');
      },3000);

   }
   loading();
    return <div>
       <div>
          <img src="first picture.png" width="300" className={load}  /> 
          <img src="spinner.gif" style={{marginLeft:'100px'}} width="50" className={spin}  /> 
       </div>
       <div className={first}>
   
      <div className="container">

      {[...Array.from({length:14})].map(()=> <img src="/backface.png" width="170" className="backface text-center d-relative" />)}
   <div className='d-none d-sm-inline'>
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
       <img src="/backface.png" width="170" className="backface text-center d-relative" />
</div>

      </div>
           
      

        
   <RandomCard />
  
   </div>
       </div>
}

export default backface;