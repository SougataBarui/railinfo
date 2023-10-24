import React from "react";
import "../style/locomotives.css"
import "../style/mixelec.css"
const Passdie=()=>{
    return(
        <>
        <div class="cover">
        <img src="../img/wdpcover.jpg" alt=""/>
        <div id="text">
        <h1>PASSENGER CLASS (WDP SERIES)</h1>
        </div>
    </div>


    <div class="mixelec">
        
        <h3>WDP-4/4B/4D:</h3>
        
        <p>
            The Indian locomotive class WDP-4 (EMD GT46PAC) is a passenger-hauling diesel-electric locomotive with AC electric transmission designed by General Motors Electro-Motive Division and built by both GM-EMD and under license by Banaras Locomotive Works (BLW) of Varanasi, India for Indian Railways as the classes WDP4, WDP4B and WDP4D. The GT46PAC is a passenger version of the previous Indian Railways EMD GT46MAC freight locomotive. The locomotive has a 16-cylinder 710G3B diesel engine and is one of the fastest diesel-electric locomotives in service in Indian Railways.
        </p>
        
        <h3>WDP-4:</h3>
        <img src="../img/wdp4.jpg" class="image" alt=""/>
        <p>
            The WDP-4 was the loco originally designed by GM EMD and 10 of them were dispatched to India by June 2001. Later on Banaras Locomotive Works, Varanasi started building them initially using knocked-down kits and later indigenously. Starting 2003, the locomotives were produced in large numbers by BLW. The locomotive features self-diagnostics control using EM2000 onboard microprocessor which was a new technology for Indian Railways back then.
        </p>
        <h3>WDP-4B:</h3>
        <img src="../img/WDP4B.jpg" class="image" alt=""/>
        <p>
            This was the first attempt of the Railways to improve upon the successful WDP-4 locomotive. The Bo1-1Bo was found inadequate for hauling 24 coach passenger trains due to the reduced tractive effort. As a result, DLW, reconfigured the chassis to be Co-Co instead. This led to better adhesion with the rails to provide better acceleration with heavy trains. Moreover, the original EMD 710 engine was tweaked to produce an output of 4,500 HP instead of the original 4,000 HP. this Up-rated engine was designated as EMD 16N-710G3B-EC, with an RPM of 910 at Notch-8. This locomotive came to be known as the "GT46PACe". One more important change added to this loco was the inclusion of Blended Brake System. This was added to maximise the use of Dynamic brakes by the loco-pilot and therefore minimise the wear and tear on the fixed brake rigging of the coaches and the locomotive. The addition of blended brake is responsible for the subclass to be designated with a 'B'. Some more features are the widened piggy-face cab profile to aid visibility, change in the Traction Motor blower by installing a higher power motor and increase in the axle load to 20.2 tonnes (19.9 long tons; 22.3 short tons). The locomotive also has a self-load test feature that allows it to test the net output of the engine. In Siemens and EMD systems, the loco has been provided with 2 traction inverters (TCC-1 and TCC-2, for the respective bogies) while in the Medha system, it has 6 traction inverters, one for each traction motor.
        </p>
        <h3>WDP-4D:</h3>
        <img src="../img/WDP4D.jpg" class="image" alt=""/>
        <p>
            The final alterations to the GT46PAC came in the form of the WDP-4D. The locomotive is the most distinctively identifiable of the three thanks to the addition of a second cab at the long hood end of the locomotive. Due to the heat generated from the radiator at the second cab end of the locomotive, DLW had to install air conditioning to protect both the electrical components and the loco-pilot from the high temperatures.The existing features from WDP-4B have been carried forward to this class and it exclusively features the widened cab profile. Since it is a Dual Cab now, it is called as "JT46PACe". The loco features a completely different desk control stand, provided by Medha with digital display screens allowing for remote fault diagnostics.Many locos also have GSM-R based transmission antennae to transmit critical loco info for use by maintenance and signalling staff. It features electro-pneumatic microprocessor based control adapted from the WDP-4B and brake system equipment of KNORR/NYAB CCB type.This loco again with Dual-Cab, but with More Power and Better Fuel Consumption and State-of-the-Art features compared to ALCo DL560C, along with an Air Conditioned Hood Cab, became a very efficient replacement of WDP-3A alias "Toaster".
        </p>



        <h4>Type and origin:</h4>
        <ul class="list">
            <li>Power type: Diesel-electric.</li>
            <li>Build date: (EMD) 2000-2001 (DLW) 2003-2017.</li>
            <li>Total produced: WDP-4: 100 WDP-4B: 86 WDP-4D: 525 Under License (Production has stopped).</li>
        </ul>
        <h4>Specifications:</h4>
        <ul class="list">
            <li>Configuration: Co-Co.</li>
            <li>Axle load: WDP-4: 19.5 t (19.2 long tons; 21.5 short tons) WDP4B: 20.2 t (19.9 long tons; 22.3 short tons) WDP4D: 20.5 t (20.2 long tons; 22.6 short tons).</li>
            <li>Loco weight: WDP4: 115.8 t (114.0 long tons; 127.6 short tons) WDP4B: 117 t (115 long tons; 129 short tons) WDP4D: 123 t (121 long tons; 136 short tons).</li>
            <li>Traction motors: WDP4: Siemens 1TB2622-0TB02 WDP4B: Siemens 1TB2622-0TA02 or EMD A 2916-8 WDP4D: Siemens 1TB2525-0TA02 or EMD A 2916-8.</li>
        </ul>
        <h4>Performance figures:</h4>
        <ul class="list">
            <li>Maximum speed: WDP-4: Service: 160 km/h (99 mph) Testing: 180 km/h (110 mph) WDP-4B: 130 km/h (81 mph) WDP-4D: 135 km/h (84 mph).</li>
            <li>Power output: 4,000 hp (2,980 kW) (WDP4) 4,500 hp (3,360 kW) (WDP4B) 4,500 hp (3,360 kW) (WDP4D).</li>
            <li>Tractive effort: WDP-4: 27,550 kgf (270.2 kN) WDP-4B: 40,775 kgf (399.87 kN) WDP-4D: 43,788 kgf (429.41 kN).</li>
        </ul>

    </div>
        </>
    )
}
export default Passdie;