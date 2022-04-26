import { useEffect } from 'react';
import React from 'react'
const HomeBanner = () =>{
    useEffect(() => {
        (function runForever() {
            var m = 0,
              text;
              text = "I'm a Front-End Web Developer";
            function typing() {
              if (m < text.length) {
                document.getElementById("text").innerHTML += text.charAt(m) ;
                m++;
                setTimeout(typing, 100);
              }
            }
    
            typing();
            setTimeout(runForever, 555555000);
          })
          
          
          
          ();
          
    }, [])
return(
    <section className='Banner section'>
         
            <div id='text'>
            <h1 className='text'>Hello, I'm Pouria Razavian</h1> <br/>
            </div> 

            {/* <TextBanner/> */}
            <div className='ButtonIMG'></div>
    </section>
);
}





export default HomeBanner;