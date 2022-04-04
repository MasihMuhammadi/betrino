

import React ,{useState} from 'react';


const RandomCard = () =>{

        const [message, setMessage] = useState('congratulation, you win');
        const [popup , setPopup] = useState('popup-container d-none')    ;
        const [score , setScore] = useState(0);
        const [chance , setChance] = useState(5);
        const [num , setNum] = useState(0);
        const [back_card1 , setBack_card1] = useState("/backface.png");
        const [back_card2 , setBack_card2] = useState("/backface.png");
        const [back_card3 , setBack_card3] = useState("/backface.png");
        const [rotate ,setRotate] = useState('');

    

        
    const cards1 = ['spade','heart','club','diamond'];
    const cards2 = ['club','diamond','spade','heart'];
    const cards3 = ['diamond','heart','club','spade'];

    var  random_card1 = cards1[Math.floor(Math.random() * cards1.length)];
    var random_card2 = cards2[Math.floor(Math.random() * cards2.length)];
    var random_card3 = cards3[Math.floor(Math.random() * cards3.length)]; 
  
    
    var random_num1 = Math.floor((Math.random() * 13) + 2);
    var  random_num2 = Math.floor((Math.random() * 13) + 2) 
    var random_num3 = Math.floor((Math.random() * 13 ) + 2);
    
       
    const playAgain = () =>{
        setScore(0);
        setChance(5);
        setPopup('popup-container d-none');
        setBack_card1("/backface.png");
        setBack_card2("/backface.png");
        setBack_card3("/backface.png");
        setNum(0);
    }
    
    const showMyCards = () =>{
        
        setRotate('transform:rotate(40deg)');
        setBack_card1(`/${random_num1} ${random_card1}.png`);
        setBack_card2(`/${random_num2} ${random_card2}.png`);
        setBack_card3(`/${random_num3} ${random_card3}.png`);
        

       

        if((random_num1 >= 10 || random_num1 == 2) && (random_num2 >= 10 || random_num2 == 2) && (random_num3 >= 10 || random_num3 == 2)){
            setNum(' Three jaick');
				setScore(score + 10);	
				if(score == 40){
					setPopup('popup-container d-flex');
				
                     setMessage('congratulation, you win');

				}
         
            
        }

        else{
   
         if(random_num1 >= 10 || random_num1 == 2){
            random_num1 = 0;
          }
          if(random_num2 >= 10 || random_num2 == 2){
              random_num2 = 0;
          }
          if(random_num3 >= 10 || random_num3 == 2){
              random_num3 = 0;
          }
          

         if(((random_num1 + random_num2 + random_num3 )) < 10){
              
             setNum((random_num1 + random_num2 + random_num3) + ' Spot' );
			 	if((random_num1 + random_num2 + random_num3 ) >= 7){
					setScore(score + 10);
					if(score == 40){
						setPopup('popup-container d-flex');
                        setMessage('congratulation, you win');

					}
				 }
				if(((random_num1 + random_num2 + random_num3) < 7)){
					setChance(chance - 1);
					if(chance == 1){
						setPopup('popup-container d-flex');
                        setMessage('unfortunately, you lose!');
						
					}
				}
             
         }


         else{
            
             setNum((random_num1 + random_num2 + random_num3) - 10 + ' Spot');
			 if(((random_num1 + random_num2 + random_num3) - 10) >= 7){
				setScore(score + 10);
				if(score == 40){
					setPopup('popup-container d-flex');
                      setMessage('congratulation, you win');

					
				}
			}
			if((((random_num1 + random_num2 + random_num3) - 10) < 7 )){
				setChance(chance - 1);
				if(chance == 1){
					setPopup('popup-container d-flex');
                    setMessage('unfortunately, you lose!');
						
					
				}
			}
            
         }
        
  
             if(((random_num1 + random_num2 + random_num3) > 20)){
          setNum(((random_num1 + random_num2 + random_num3) - 20) + ' Spot');
					if(((random_num1 + random_num2 + random_num3) - 20) >= 7){
						setScore(score + 10);
						if(score == 40){
							setPopup('popup-container d-flex');
                            setMessage('congratulation, you win');

						
						}
					}
					
					if(((random_num1 + random_num2 + random_num3) - 20) < 7){
						setChance(chance - 1);
						if(chance == 1){
                            setPopup('popup-container d-flex');
                            setMessage('unfortunately, you lose!');
						
							
						}
					}


         }

         if(((random_num1 + random_num2 + random_num3 )- 10) == 10  || ((random_num1 + random_num2 + random_num3 )- 10) === 0 ){
             setNum('Empty');
				setChance(chance - 1);
				if(chance == 1){
					setPopup('popup-container d-flex');
                    setMessage('unfortunately, you lose!');
						
					
				}
				
               
         }
          
        }

            setTimeout(() =>{
                setBack_card1('/backface.png');
                setBack_card2('/backface.png');
                setBack_card3('/backface.png');
                setNum(0);
            },5000);
        
		
     }
        
     
     
    


    return <div className=""> 
    
    <div className="row mt-3">
        
    
        
        <div className=" col-5 result text-white ">Card: {num}  </div>
    <div className="col text-white" >Chance:{chance}</div>
    <h6 className="score text-white col mb-4">Score:{score}</h6>
    </div>
    
    <button className="fixed-bottom show" onClick={showMyCards}>Show Card</button>
   
    <div className={popup} >
            <div className="popup">
        <h2 id="final-message">{message}</h2>
        <button className="btn" onClick={playAgain}>Next</button>
      </div>
      </div>

        <div className=" random-cards  mt-4">
           
       <img  className={`card1 ${rotate}`} src={back_card1} width="200"   />
      
        <img src={back_card2}  width="200" className=" card3" />
       
        <img className=" card2" src={back_card3} width="200" />
       </div>

       
     
      
        
        

    </div>

}
export default RandomCard;