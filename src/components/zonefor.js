import React from "react";
import "../style/zonepage.css"

const Detailzone=({zoneData})=>{
    return(
        <>
        {zoneData.map((currElem)=>{
            return(
                <>
                <div class="content1">
            <h1>{currElem.heading}</h1>
            

            
            <img src={currElem.imgsrc[0]} alt=""/>
            <div class="para">
                <p>{currElem.para1}</p>
                <h4>{currElem.suheading1}</h4>
                <p>
                    <ul>
                        {currElem.divisionhead.map((division,index)=>(
                            <li key={index}>{division}</li>
                        ))}
                     
                    </ul>
                
                    </p>

                    <h3>{currElem.subheading2}</h3>

                    <img src={currElem.locoimg} alt=""/>
                    <p>
                        <ul>
                        {currElem.locoshed.map((division,index)=>(
                            <li key={index}>{division}</li>
                        ))}
                        
                        </ul>
                    </p>
                    <h3>{currElem.subheading3}</h3>
                    <img src="" alt=""/>
                    <p>
                        <ul>
                        {currElem.majorstations.map((division,index)=>(
                            <li key={index}>{division}</li>
                        ))}
                        
                        </ul>
                    </p>
                    <h3>{currElem.subheading4}</h3>
                    <img src="" alt=""/>
                    <p>{currElem.tourism}</p>
                
            </div>

        </div>                
                </>
            )
        }
        )}
        </>
    )
}

export default Detailzone;