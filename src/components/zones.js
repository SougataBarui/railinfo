import React from "react";
import "../style/zones.css";
import "../style/zonescon.css"
import { Link } from "react-router-dom";
import Zonesapi from "./zonesapi";
const Zones=()=>{
    return(
        <>
        <div class="cover">
        <img src="../img/maxresdefault (1).jpg" alt=""/>
        <div id="text">
        <h1>INDIAN RAILWAY ZONES</h1>
        <p>Indian Railways is divided into zones, which are further sub-divided into divisions, each having a divisional headquarters. Each of the divisions is headed by a Divisional Railway Manager (DRM), who reports to the General Manager (GM) of the zone.
            There are total 19 operational zones.
        </p>
  
       </div>
      </div>
        
        
        
        
        
        
        
        
        <div class="container">
        <div class="image1">
          <img src="../img/northern-zone.jpg" alt="Image" style={{ width: '100%' }}/>
        </div>
        <div class="content">
          <h3>NORTHERN RAILWAY ZONE (NR)</h3>
          <br/>
          <a href="#"><Link to="/Zoneinfo">The Northern Railway (NR) is one of the 19 railway zones of India and the 
            northernmost zone of the Indian Railways. It is headquartered at the Baroda House in New Delhi.
            The main railway station of Delhi and one of the busiest in India, serving as a major hub for 
            trains to and from northern India.</Link></a>
        </div>
        <div class="spacer"></div>
  
      </div>
      <hr class="bodyline"/>
     
     
      <div class="container">
        <div class="image1">
          <img src="../img/north-central.jpg" alt="Image" style={{ width: '100%' }}/>
        </div>
        <div class="content">
          <h3>NORTH CENTRAL RAILWAY ZONE (NCR)</h3>
          <br/>
          <a href="#"><Link to={'/Zoneinfo/${zonesapi[0]}'}>The North Central Railway is one of the 19 railway zones in India. The largest 
            railway station in NCR is Kanpur Central. It is headquartered at Prayagraj.Furthermore, the NCR 
            zone connects visitors to the serene beauty of Allahabad,allure of Jhansi and the architectural marvels of Kanpur.</Link></a>
        </div>
        <div class="spacer"></div>

      </div>
      <hr class="bodyline"/>
     
     
     
     
     
      <div class="container">
        <div class="image1">
          <img src="../img/norther-eastern.jpg" alt="Image" style={{ width: '100%' }}/>
        </div>
        <div class="content">
          <h3>NORTH EASTERN RAILWAY ZONE (NER)</h3>
          <br/>
          <a href="#">The North Eastern Railway is one of the 19 railway zones of Indian Railways. 
            It is headquartered at Gorakhpur. North Eastern Railway is one of the most important transit 
            zones, that is, it is used to take in loaded wagons.NER facilitates 
            convenient travel for tourists seeking diverse experiences.</a>
        </div>
        <div class="spacer"></div>

      </div>
      <hr class="bodyline"/>
     
     



      <div class="container">
        <div class="image1">
          <img src="../img/northern-western.jpg" alt="Image" style={{ width: '100%' }}/>
        </div>
        <div class="content">
          <h3>NORTH WESTERN RAILWAY ZONE (NWR)</h3>
          <br/>
          <a href="#">The North Western Railway is one of the 19 railway zones in India which is 
            headquartered at Jaipur.The NWR zone's major stations, such as Jaipur Junction, enable visitors 
            to delve into the vibrant culture  of the "Pink City." Offering 
            seamless rail services and convenient access to these diverse attractions </a>
        </div>
        <div class="spacer"></div>

      </div>
      <hr class="bodyline"/>
     
     
      
      <div class="container">
        <div class="image1">
          <img src="../img/north-east-frontier.jpg" alt="Image" style={{ width: '100%' }}/>
        </div>
        <div class="content">
          <h3>NORTHEAST FRONTIER RAILWAY ZONE (NFR)</h3>
          <br/>
          <a href="#">The Northeast Frontier Railway is one of the 19 railway zones of the 
            Indian Railways which is headquartered in Maligaon, Guwahati. NFR zone of India plays a 
            crucial role in promoting tourism by providing access to a wide 
            range of captivating destinations in the northeastern states of the country. </a>
        </div>
        <div class="spacer"></div>

      </div>
      <hr class="bodyline"/>
     
     
     
     
      <div class="container">
      <div class="image1">
        <img src="../img/eastern.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>EASTERN RAILWAY ZONE (ER)</h3>
        <br/>
        <a href="#">The Eastern Railway is among the 19 zones of the Indian Railways. Its headquarters is 
          at Fairley Place, Kolkata and comprises four divisions: Howrah, Malda, Sealdah and Asansol. ER's 
          major station, Howrah Junction, offers travelers  city known for its 
          colonial architecture, cultural heritage. </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>


   
   
   
    <div class="container">
      <div class="image1">
        <img src="../img/east-central.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>EASTERN CENTRAL RAILWAY ZONE (ECR)</h3>
        <br/>
        <a href="#">East Central Railway Zone, which is abbreviated as ECR, is one of the 19 railway zones 
          in India. Its headquarters is located at Hajipur.Formerly, it was established on 08 September 
          1996. However, it started its operations on 01 October 2002. It was carved out of Eastern and 
          North Eastern Railway. 
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>


    
    <div class="container">
      <div class="image1">
        <img src="../img/east-coast (2).jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>EASTERN COAST RAILWAY ZONE (ECoR)</h3>
        <br/>
        <a href="#">It is abbreviated as ECoR and is one of the 19 railway zones of Indian Railways. It was 
          established on 01 April 2003 and is headquartered at Bhubaneswar. After the approval of 
          parliament, east coast railway was inaugurated by the then prime minister of India H.D. 
          Deve Gowda on 08 August 1996.
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>


    
    
    <div class="container">
      <div class="image1">
        <img src="../img/central-zone.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>CENTRAL RAILWAY ZONE (CR)</h3>
        <br/>
        <a href="#">It is one of the largest zones of Indian Railways which is headquartered at Chhatrapati 
          Shivaji Maharaj Terminus in Mumbai. It is known for starting the first passenger railway line in 
          India from Mumbai to Thane on 16 April 1853. It also handles the Mumbai Suburban Train System that 
          goes towards CST to Kalyan station.
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>     
     
   
   
    
    <div class="container">
      <div class="image1">
        <img src="../img/western.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>WESTERN RAILWAY ZONE (WR)</h3>
        <br/>
        <a href="#">It is one of the 19 railway zones in India that is abbreviated as WR and is 
          headquartered at Churchgate, Mumbai, and Maharashtra. Its divisions include Ratlam, Ahmedabad, 
          Rajkot, Vadodara, Bhavnagar, and Mumbai WR. The current General Manager of Western Railway Zone 
          as of June 2020 is Shri Alok Kansal.
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>
   
   
    <div class="container">
      <div class="image1">
        <img src="../img/west-central-railway-zone-map.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>WEST CENTRAL RAILWAY ZONE (WCR)</h3>
        <br/>
        <a href="#">It is abbreviated as WCR and is headquartered at Jabalpur, Madhya Pradesh. This zone is 
          divided into three divisions that include Bhopal, Kota and Jabalpur. It was established on 01 
          April 2003 by merging the Jabalpur and Bhopal division of the Central Railway Zone and the 
          Kota division of the Western Railway zone.
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>




    <div class="container">
      <div class="image1">
        <img src="../img/kokanrailway.png" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>KONKAN RAILWAY ZONE (KR)</h3>
        <br/>
        <a href="#">It is abbreviated as KR and is operated by the Konkan Railway Corporation. It is 
          headquartered at CBD Belapur in Navi Mumbai, Maharashtra, India. This makes the journey itself an 
          attraction, providing travelers with an opportunity to experience the natural beauty and unique 
          terrain of the Konkan region.
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>




    <div class="container">
      <div class="image1">
        <img src="../img/southern.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>SOUTHERN RAILWAY ZONE (SR)</h3>
        <br/>
        <a href="#">It is one of the 19 railway zones in India that is abbreviated as SR. Its headquarters 
          is located at Chennai, Tamil Nadu. This zone was established on 14 April 1951 by combining 
          railways of three states; Mysore State Railway, South Indian Railway Company and the Madras and 
          Southern Mahratta Railway. 
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>





    <div class="container">
      <div class="image1">
        <img src="../img/south-central-railway-zone.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>SOUTH CENTRAL RAILWAY ZONE (SCR)</h3>
        <br/>
        <a href="#">It is abbreviated as SCR and is one of the 19 zones of Indian railways. It was 
          established on 02 October 1966. The current General Manager of South Central 
          Railway zone (as of January 2020) is Gajanan Mallya. In this zone, over 700 trains run in a day 
          and around 5 lakh passenger travel in this zone in a day.
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>
   



    <div class="container">
      <div class="image1">
        <img src="../img/south-east-central-railway-zone.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>SOUTH EAST CENTRAL RAILWAY ZONE (SECR)</h3>
        <br/>
        <a href="#">It is one of the eighteen railway zones in India. It is abbreviated as SECR and is 
          headquartered at Bilaspur. SECR comprises three divisions which are Raipur, Nagpur SEC and 
          Bilaspur. The major railway stations of this zone include Bilaspur, Itwari railway station, 
          Bhandara road, Gondia, Durg, Rajnandgaon, Raigarh, Anuppur, etc. 
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>



    <div class="container">
      <div class="image1">
        <img src="../img/south-eastern-railway-zone.jpg" alt="Image"style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>SOUTH EASTERN RAILWAY ZONE (SER)</h3>
        <br/>
        <a href="#">It is abbreviated as SER and is headquartered at Garden Reach in Kolkata. It comprises 
          four divisions that include Adra, Ranchi, Kharagpur and Chakradharpur. It is a part of Eastern 
          Railways.  It was established in August 1955 after the separation of BNR from the Eastern Railway Zone.
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>





    <div class="container">
      <div class="image1">
        <img src="../img/south-western-railway-zone.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>SOUTH WESTERN RAILWAY ZONE (SWR)</h3>
        <br/>
        <a href="#">It is abbreviated as SWR and is headquartered at Hubli Karnataka. It has three divisions
           that include Hubballi, Mysuru and Bengaluru. It was established in 2003 by carving out Bangalore
            and Mysore divisions from Southern Railways and Hubli division from South Central Railways.
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>




    <div class="container">
      <div class="image1">
        <img src="../img/southerncoast.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>SOUTHERN COAST RAILWAY ZONE (SCoR)</h3>
        <br/>
        <a href="#">The Southern Coast Railway Zone (SCoR) is one of the 19 railway zones in India, 
          responsible for managing and operating the railway infrastructure in specific regions of the 
          southern part of the country. As latest update in September 2021, the Southern Coast Railway 
          Zone was proposed but not yet formally established. 
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>
   


    <div class="container">
      <div class="image1">
        <img src="../img/metrorailway.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>METRO RAILWAY, KOLKATA</h3>
        <br/>
        <a href="#">The Kolkata Metro, often simply referred to as the Kolkata Metro, holds a special place 
          in India's urban transportation landscape. Established in 1984, it became the nation's first 
          metro system and the first underground railway in the country.It remains a testament to India's 
          progress in urban transportation for the people of Kolkata.
           </a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>
        </>
    );
};



export default Zones;