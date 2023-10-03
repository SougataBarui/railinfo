import React from "react";
import "../style/signal.css";
import Back from "../img/signal.jpg";
import Sig from "../img/images.jpeg";
import Stop from "../img/stop.jpg";
import Shunt from "../img/shunt.jpg";
import Outer from "../img/outersignal.jpg";
import Ho from "../img/home.jpg";
import Starter from "../img/starter.jpg";
import Advstarter from "../img/advancestarter.jpeg";
import Reapter from "../img/repeater.gif";
import Routing from "../img/routing.jpg";
import Calling from "../img/callingon.jpg";
import Absolute from "../img/absolute block.png";
import Automatic from "../img/automatic.jpg";
import Centralised from "../img/CTC.jpg";
import Interlocking from "../img/interlocking.jpg";



const Signal=()=>{
    return(
        <>
         <div class="cover">
        <img src={Back} alt=""/>
        <div id="text">
        <h1>INDIAN RAILWAY SIGNAING<br/>SYSTEM</h1>
        <p>Railway signalling is a system used to control railway traffic safely, essentially to prevent trains from colliding.</p>
    
      </div>
        </div>
    <div class="signal">
      
        <p>Signalling consists of the systems, device and means by which trains are operated efficiently and tracks are used to maximum extent, maintaining the safety of the passengers, the staff and the rolling stock. It includes the use and working of signals, points, block instruments and other equipment’s.</p>
        <img src={Sig} alt="" class="noimage"/>
        <h2>Objectives of Signaling</h2>
        <p>
            <ul class="list">
            <li>To provide facilities for the efficient movement of trains.</li>
            <li>To ensure safety between two or more trains which crosses or approaches each other’s path.</li>
            <li>To provide facilities for safe and efficient shunting operations.</li>
            <li>To guide the trains movement during maintenance and the repairs of the track.</li>
            <li>To safeguard the trains at converging junctions and give directional indications of diverging junctions.</li>
            </ul>
        </p>
        
        
        <h2>Stop Signals:</h2>
        <img src={Stop} alt="" class="image"/>
        <p>Stop signals in Indian Railways, like in most railway systems worldwide, are essential safety devices used to control the movement of trains and prevent collisions. These signals convey specific instructions to train operators, indicating when they should stop or proceed with caution. The signal system in Indian Railways is quite similar to international standards, using color-coded lights and sometimes flags.</p>
        <h3>Here are some common types of stop signals in Indian Railways:</h3>
        <ul class="list">
          <li>Red Signal: The red signal is the universal stop signal in railways worldwide. It is displayed as a red light and means the train must come to a complete stop immediately and cannot proceed until the signal changes to a proceed signal.</li>
          <li>Single Yellow Signal: This signal is displayed as a single yellow light. It indicates that the next signal will likely be a red signal. The train operator should be prepared to stop at the next signal.</li>
          <li>Double Yellow Signal: This signal is displayed as two yellow lights. It indicates that the train should proceed with caution, as the next signal will likely be a red signal. The train operator should be prepared to stop but can continue at a reduced speed if the line ahead is clear.</li>
          <li>Green Signal: The green signal is displayed as a green light. It indicates that the train can proceed safely without any restrictions.</li>
          <li>Flashing Red Signal: A flashing red signal is used to indicate a dangerous situation or failure ahead. Trains must stop immediately and not proceed until instructed.</li>
          <li>Semaphore Signals: In some older sections of the Indian Railways, semaphore signals may still be in use. These signals use semaphore arms (flags or lights on a pivot) to convey stop, caution, or proceed instructions.</li>
        </ul>
        
        
        
        <h2>Shunting Signals:</h2>
        <img src={Shunt} alt=""class="noimage"/>
        <p>Shunting signals in railway systems, including Indian Railways, are a specific category of signals used to control the movement of trains within railway yards, sidings, or other areas designated for the sorting, assembling, or disassembling of trains. These signals ensure safe and efficient shunting operations, where individual cars or groups of cars are moved within a railway yard.</p>
        <h3>Shunting signals are typically different from the mainline signals and serve the following purposes:</h3>
        <ul class="list">
          <li>Shunt Ahead Signal (Yellow/Black or Yellow/Yellow): This signal indicates that a train may proceed with shunting movements but should not proceed onto the mainline track. It's often displayed as a yellow/black or yellow/yellow light or a unique pattern.</li>
          <li>Shunt to the Right or Left Signal: These signals direct the train to shunt to the right or left, depending on the displayed signal.</li>
          <li>Stop Signal: Just like in mainline signals, a red signal in shunting indicates a complete stop.</li>
          <li>Calling-On Signal (White): A white signal can be used in shunting to indicate that a train may proceed with caution. It means the track ahead is occupied, but the train can proceed if the way is clear.</li>
          <li>Shunt Limit Boards: These are often used in conjunction with shunting signals to mark the end of the shunting area. Trains are not allowed to proceed beyond these boards unless given specific instructions.</li>
        </ul>
        <p>It's important to note that the specific design and meaning of shunting signals can vary between different railway systems, including Indian Railways, and may also change over time. Therefore, railway personnel must be well-trained and familiar with the signals and their meanings in the specific context in which they are working.
          The use of shunting signals is crucial for ensuring the safety and efficient operation of railway yards, where trains are assembled, disassembled, or rearranged. They help prevent collisions and ensure that shunting operations are carried out systematically and according to the railway's operational plan.</p>
         
         
          <h2>Outer Signals:</h2>
          <img src={Outer} alt="" class="noimage"/>
          <p>In the context of railway signaling, "outer signals" typically refer to signals located at the outer boundaries or approaches of a railway station or a section of railway track. These signals play a crucial role in regulating and controlling the movement of trains as they approach or depart from a station or enter a specific section of track. </p>
          <h3>The specific functions of outer signals can vary depending on the railway system and its operational requirements, but some common purposes include:</h3>
          <ul class="list">
            <li>Approach Signals: Outer signals often serve as approach signals, indicating to train operators the conditions ahead as they approach a station or a specific section of track. These signals convey information about whether the track ahead is clear or if there are other trains occupying the track.</li>
            <li>Station Entry Signals: In the context of a railway station, outer signals may also serve as entry signals. They indicate whether a train is allowed to enter the station and which platform or track it should proceed to.</li>
            <li>Protection Signals: Outer signals can act as a form of protection to prevent trains from entering a section of track that is already occupied or undergoing maintenance. A red signal at an outer location indicates that the train must stop and cannot proceed further.</li>
            <li>Speed Control: Some outer signals may also convey information about the permissible speed limits as trains approach certain areas, such as speed restrictions in station areas or on curved tracks.</li>
            <li>Direction Indication: Outer signals may indicate the direction in which a train should proceed, especially in situations where multiple tracks diverge or merge.</li>
          </ul>
          <p>The specific design and operation of outer signals can vary between different railway systems and may include the use of color lights (such as red, yellow, and green), position of the signal arm (in the case of semaphore signals), or other visual and audible cues to convey information to train operators. The use of outer signals is crucial for ensuring the safe and efficient movement of trains on the railway network and for preventing collisions or other accidents.</p>


          <h2>Home Signals:</h2>
          <img src={Ho} alt="" class="image"/>
          <p>"Home signals" in the context of railway signaling refer to a specific category of signals used to control the movement of trains approaching a railway station or a junction. These signals are typically located close to the entrance of a station or a junction and provide important information to train operators as they approach these critical points. </p>
          <h3>The primary functions of home signals include:</h3>
          <ul class="list">
            <li>Stop Signals: Home signals often serve as stop signals. When displaying a red aspect, they indicate to train operators that they must come to a complete stop and should not proceed further. This is especially important to prevent trains from entering a station area or a junction if the track ahead is occupied or if there is a need to control the flow of traffic.</li>
            <li>Clear Signals: When displaying a green or other clear aspect, home signals indicate that the track ahead is clear, and the train may proceed safely. This signal allows the train to enter the station or continue along its designated route.</li>
            <li>Caution Signals: Some home signals may display a yellow or amber aspect, indicating to train operators that they should proceed with caution. This is often used to inform trains to slow down and be prepared to stop if necessary.</li>
            <li>Route Indication: In complex junctions or where multiple tracks diverge, home signals may also convey information about the specific route that the train should take.</li>
          </ul>
          <p>The specific design and operation of home signals can vary between different railway systems and regions, but they typically use color lights (such as red, yellow, and green), position of the signal arm (in the case of semaphore signals), or other visual and audible cues to convey information to train operators. Home signals are a critical component of railway safety and are strategically placed to control and coordinate train movements, especially in areas where multiple tracks converge or where trains enter or exit stations.</p>
          

         
          <h2>Starter Signal:</h2>
          <img src={Starter} alt="" class="image"/>
          <p>A starter signal, in the context of railway signaling, is a crucial component of the signaling system that is used to control the departure of trains from a railway station or a specific location on a railway line. Starter signals are positioned at the beginning of a platform or a designated section of track, and their primary purpose is to indicate to train operators whether it is safe to proceed and depart from that location. </p>
          <h3>Here are some key points about starter signals:</h3>
          <ul class="list">
            <li>Clear Signal: A starter signal displaying a clear aspect, often shown as a green light or a horizontal arm (in the case of semaphore signals), indicates to the train operator that it is safe to depart and proceed along the designated track or platform. The train can leave the station or the designated starting point.</li>
            <li>Stop Signal: If a starter signal displays a red aspect, it signals to the train operator that they must come to a complete stop and not proceed further. This is essential to prevent trains from departing into occupied tracks, junctions, or other unsafe conditions.</li>
            <li>Caution Signal: Some starter signals may display a yellow or amber aspect, which informs the train operator to proceed with caution. This typically means the track ahead may not be entirely clear, and the train should be prepared to stop if necessary.</li>
            <li>Position: Starter signals are usually positioned at the entrance of a station or a section of track where train departures are controlled. They may be placed on the platform or alongside the track.</li>
            <li>Interlocking Systems: In many modern railway systems, starter signals are interconnected with other signals and switches through interlocking systems. These systems ensure that the movement of one train is coordinated with the status of other trains and tracks in the vicinity, enhancing safety and preventing conflicts.</li>
            <li>Route Indication: In complex railway junctions or yards, starter signals may also provide information about the specific route a train should take when departing.</li>
          </ul>
          <p>Starter signals are a fundamental part of railway signaling, helping to ensure safe and efficient train departures from stations and other designated points along the railway network. They play a critical role in preventing accidents, ensuring proper spacing between trains, and maintaining the orderly flow of rail traffic.</p>
          


          <h2>Advance Starter Signal:</h2>
          <img src={Advstarter} alt="" class="image"/>
          <p>An "Advance Starter Signal" is a specific type of railway signal used to control the movement of trains on a railway track. This signal is typically located at some distance before a main starter signal. Its primary purpose is to provide advanced information to train operators about the status of the track ahead, allowing them to prepare for the conditions they will encounter at the main starter signal. </p>
          <h3>Here are the key features and functions of an Advance Starter Signal:</h3>
          <ul class="list">
            <li>Warning and Preparatory Signal: The Advance Starter Signal serves as a warning or preparatory signal to train operators, indicating that they will soon approach a main starter signal. It provides information about the status of the main signal ahead.</li>
            <li>Distance Indicator: It helps train operators gauge the distance to the main starter signal. This is valuable information for train operators to anticipate when they will need to begin slowing down and preparing to stop if the main signal displays a stop aspect.</li>
            <li>Distance from Main Signal: The distance between the Advance Starter Signal and the main starter signal can vary depending on the railway's operational needs and safety considerations. This distance ensures that train operators have sufficient time to react and bring the train to a halt if necessary.</li>
          </ul>
          <p>Advance Starter Signals are an important safety feature in railway signaling systems, helping to prevent accidents and ensure smooth and efficient train operations. They give train operators critical information about the status of the track ahead, allowing them to make informed decisions and operate trains safely.</p>
    


    <h1 class="he">Special Signal</h1>
    
    
    <h2>Repeater Signal</h2>
    <img src={Reapter} alt="" class="noimage"/>
    <p>A "Repeater Signal" in railway signaling is a type of signal used to relay or repeat the aspect (indication) displayed by another signal that is located further along the track. The primary purpose of a repeater signal is to provide train operators with additional visibility and confirmation of the aspect displayed by the original signal, especially when the original signal may not be directly visible due to curvature, obstructions, or other reasons. </p>
    <h3>Here are some key characteristics and functions of repeater signals:</h3>
    <ul class="list">
      <li>Confirmation of Signal Aspect: Repeater signals are positioned at a location where train operators have a clear line of sight to see the signal aspects of the original signal they are repeating. They display the same aspect as the original signal.</li>
      <li>Enhanced Visibility: They help improve visibility of signal aspects, particularly in situations where the main signal might be located around a curve, behind a structure, or at a distance where it might not be easily seen.</li>
      <li>Safety and Redundancy: Repeater signals add an extra layer of safety by ensuring that train operators are aware of the status of the signal. If there is any doubt about the aspect of the original signal, the repeater signal provides a redundant confirmation.</li>
      <li>Consistency: By displaying the same aspect as the original signal, repeater signals help maintain consistency in the signaling system and prevent any misinterpretation of signals by train operators.</li>
      <li>Positioning: Repeater signals are usually placed closer to the train operator's line of sight, typically within a short distance of the original signal they are repeating.</li>
    </ul>
    <p>Repeater signals are especially useful in situations where the layout of the railway track and infrastructure makes it challenging for train operators to have a clear view of the original signal. They contribute to the safety and reliability of train operations by ensuring that train operators have the necessary information to make informed decisions about their train's speed and movement.</p>


    

    <h2>Routing Signal</h2>
    <img src={Routing} alt="" class="image"/>
    <p>A "Routing Signal" in railway signaling is a type of signal used to indicate a specific routing or path that a train should follow at a railway junction or crossover. These signals are typically found at complex railway interchanges where multiple tracks converge or diverge, and they play a crucial role in guiding trains onto the correct tracks. </p>
    <h3>Here are the key features and functions of routing signals:</h3>
    <ul class="list">
      <li>Route Indication: Routing signals are used to inform train operators which route or track they should take at a junction or crossover. They provide clear and unambiguous instructions regarding the direction the train should follow.</li>
      <li>Positioning: Routing signals are strategically positioned at the junction or crossover to ensure they are visible to train operators approaching the diverging tracks. They are often located ahead of the actual branching point.</li>
      <li>Interlocking Systems: In modern railway systems, routing signals are interconnected with switches and other signals through interlocking systems. These systems ensure that the routing of trains aligns with the selected route and that there are no conflicts or collisions.</li>
      <li>Safety: Routing signals are essential for safety, as they help prevent trains from taking incorrect routes or entering tracks that may be occupied by other trains.</li>
      <li>Clear and Simple Design: Routing signals are designed to be easily understood by train operators, with clear indications of the chosen route.</li>
    </ul>
    <p>Routing signals are a critical component of railway signaling systems, especially in areas with complex track layouts, such as major junctions and crossovers. They play a vital role in ensuring the safe and efficient movement of trains by guiding them onto the correct tracks and preventing conflicts between train movements.</p>


    <h2>Calling-On Signal</h2>
    <img src={Calling} alt="" class="image"/>
    <p>A "Calling-On Signal" in railway signaling is a type of signal used to convey specific information to train operators regarding the status of the track ahead. It is typically displayed as a white light or another distinctive indication. The primary purpose of a Calling-On Signal is to inform train operators that they may proceed with caution and enter a section of track, platform, or station even if it appears to be occupied, as long as they can do so safely without endangering other trains or personnel. </p>
    <h3>Here are the key characteristics and functions of Calling-On Signals:</h3>
    <ul class="list">
      <li>Proceed with Caution: When a Calling-On Signal displays its indication (usually a white light), it informs the train operator that they may proceed, but they should do so cautiously. It implies that there may be a train or an obstacle on the track ahead, but it is safe to proceed at a reduced speed.</li>
      <li>Occupied or Restricted Track: Calling-On Signals are often used in situations where a track or platform may appear to be occupied by another train or where there are restrictions ahead. This signal allows trains to continue moving if the way is clear.</li>
      <li>Visibility: Calling-On Signals are typically positioned so that they are visible to train operators as they approach the area in question. This provides train operators with advanced notice and allows them to prepare for any necessary actions.</li>
      <li>Safety: While a Calling-On Signal permits a train to proceed, safety is paramount. Train operators must exercise caution, be prepared to stop if conditions change, and ensure that they can safely enter the occupied section without endangering other trains or personnel.</li>
      <li>Interlocking Systems: Like other railway signals, Calling-On Signals are often part of an interlocking system that ensures that signal indications align with the position of switches and the status of other signals in the vicinity, preventing conflicting movements.</li>
    </ul>
    <p>Calling-On Signals are a valuable tool in railway signaling systems, helping to maintain the flow of train traffic while ensuring safety. They are used in situations where it is safe for a train to proceed despite the appearance of occupancy or other restrictions on the track ahead.</p>


    <h1 class="he">Control Of Movement of Trains:</h1>
    <h3>It is quite essential that movements of trains on particular tracks should be safe and for this purpose various methods are used:</h3>
    <ul class="list">
      <li>Following trains system.</li>
      <li>Absolute block system.</li>
      <li>Automatic signalling.</li>
      <li>Pilot guard system.</li>
    </ul>



    <h2>Following Trains Systems:</h2>
    <ul class="list">
      <li>Used in case of emergencies such as failure of signalling systems.</li>
      <li>In this method, a fixed interval of time is maintained between the departure of one train and the departure of the next train along the same time.</li>
      <li>This fixed interval is worked out in such a way that sufficient distance or headway in maintained between the tail of the first train and the head of the next following train.</li>
    </ul>


    <h2>Absolute Block Systems</h2>
    <img src={Absolute} alt="" class="noimage"/>
    <p>The principle of the absolute block system of railway signalling is to ensure the safe operation of railway by allowing only one train to occupy a defined section of track at a time.
      Instead of a fixed interval of time between successive trains, a varying interval may be kept depending on the time, actually taken by particular trains.
      In the absolute block system the line is assumed to be blocked until the fact that the line is clear is established by some suitable information conveyed by block instruments.
      </p>


    <h2>Automatic Signalling</h2>
    <img src={Automatic} alt="" class="noimage"/>
    <p>Automatic signaling, also known as automatic block signaling, is a critical component of modern railway systems. It is a signaling system that uses various technologies to automatically control the movement of trains and ensure their safe separation along the railway track. The primary goal of automatic signaling is to prevent collisions and provide safe and efficient train operation. </p>
    <h3>Here are some key features and aspects of automatic signaling:</h3>
    <ul class="list">
      <li>Block Sections: Railway tracks are divided into distinct sections called "blocks." Each block represents a specific segment of the track between two signal points. Automatic signaling ensures that only one train is allowed in a block at a time. This helps maintain a safe distance between trains.</li>
      <li>Signals: Automatic signaling uses a system of signals to convey information to train operators about the condition of the track ahead. These signals can include aspects like red (stop), green (proceed), yellow (caution), and others. The signals are typically placed along the trackside and at stations.</li>
      <li>Train Detection: The signaling system incorporates methods for detecting the presence of a train within a block. This can be done using various technologies, including track circuits, axle counters, or other sensors. When a train enters a block, it is detected by the signaling system.</li>
      <li>Interlocking: Automatic signaling is often integrated with interlocking systems. Interlocking ensures that signals, switches, and track layouts work together harmoniously to prevent conflicts and accidents. It prevents scenarios where a switch is set to route a train into an occupied block.</li>
      <li>Automatic Control: Based on train detection and the current status of blocks, the signaling system automatically controls the signals along the track. Trains receive clear signals to proceed into the next block only when it is safe to do so.</li>
      <li>Speed Control: Some advanced automatic signaling systems also provide information on permissible speeds within a block, ensuring that trains operate at safe speeds in different track conditions.</li>
      <li>Emergency Situations: Automatic signaling can include provisions for handling emergency situations. If a train encounters a red signal and does not stop in time, the system can trigger emergency braking to prevent collisions.</li>
      <li>Communication: In addition to fixed signals, modern automatic signaling systems may also include communication with train operators through cab signaling or other means.</li>
    </ul>
    <p>Automatic signaling is a crucial safety feature in modern railways. It minimizes the risk of human error and enhances the efficiency and capacity of rail networks. Different regions and railway systems may have variations in their automatic signaling systems, but the overall goal is always to ensure the safe and reliable movement of trains.</p>


    <h1 class="he">Centralized Traffic Control:</h1>
    <img src={Centralised} alt="" class="image"/>
    <p>In the context of the Indian railway system, "CTC" stands for "Centralized Traffic Control." CTC is an advanced railway signaling and control system used to efficiently manage train movements on a section of railway track or across an entire railway network. It is a key component of modern rail operations that enhances safety, capacity, and operational efficiency.</p>
    <h3>Here are the key features and aspects of Centralized Traffic Control (CTC) in the Indian railway system:</h3>
    <ul class="list">
      <li>Centralized Control: CTC systems centralize control of multiple sections of railway track under the supervision of a centralized control center. This control center is staffed by trained personnel who monitor and control train movements across a defined geographic area.</li>
      <li>Electronic Signals: CTC relies on electronic signals to control train movements. These signals are displayed to train operators through visual interfaces in locomotive cabs or at stations. Common signal aspects include red (stop), green (proceed), yellow (caution), and others.</li>
      <li>Track Circuitry: CTC systems use track circuits and sensors to detect the presence and location of trains on the track. These sensors help ensure safe train separation and provide information to the control center about the occupancy of track sections.</li>
      <li>Interlocking: Interlocking systems are often integrated with CTC. Interlocking ensures that switches (turnouts) and signals are coordinated to prevent conflicting movements and route trains safely.</li>
      <li>Automatic Block Control: CTC systems automatically control the spacing between trains by managing block sections. Trains are given permission to enter a block only when it is safe to do so, ensuring a safe distance between trains.</li>
      <li>Route Setting: Control center operators can set routes for trains, determining the path they will follow through the network. This includes setting switches and signals to align with the selected route.</li>
      <li>Conflict Resolution: CTC systems can detect and prevent potential conflicts, such as two trains approaching a junction simultaneously. The system provides warnings and requires intervention from control center operators to resolve such situations.</li>
      <li>Communication: CTC systems often include communication links between the control center and trains. This allows for real-time communication, which can be essential in managing train movements, handling emergencies, and providing instructions to train operators.</li>
      <li>Safety Features: CTC systems incorporate numerous safety features to reduce the risk of human error, including enforcing speed limits, monitoring track conditions, and providing warnings in case of irregularities.</li>
      <li>Efficiency and Capacity: CTC systems improve the capacity of railway networks by allowing more precise control of train movements and reducing waiting times at signals and junctions.</li>
    </ul>
    <p>In India, CTC systems have been implemented on various railway lines, particularly in high-traffic and complex junction areas. They contribute significantly to the safety and efficiency of the Indian railway system, which is one of the largest and busiest railway networks in the world.</p>

    

    <h1 class="he">Interlocking of Signals:</h1>
    <img src={Interlocking} alt="" class="noimage"/>
    <p>Interlocking of signals is a critical aspect of railway signaling systems. It refers to the coordination and control of signals, switches (turnouts), and other elements of the railway infrastructure to ensure that train movements are safe and that conflicts or collisions are prevented. Interlocking is a fundamental safety feature in railway operations and is designed to enforce rules and logic that maintain the integrity of train movements. </p>
    <h3>Here are the key aspects of interlocking signals:</h3>
    <ul class="list">
      <li>Safety Assurance: The primary purpose of interlocking is to ensure safety by preventing conflicting movements of trains and by aligning signals and switches in a way that avoids accidents and collisions.</li>
      <li>Coordination: Signals and switches are interconnected in such a way that they work together harmoniously. For example, a signal should only display a clear aspect if the corresponding switch is set in the correct position to allow the train to follow the indicated route.</li>
      <li>Conflict Prevention: Interlocking systems are designed to prevent conflicts between trains, such as two trains attempting to enter the same section of track, or a train trying to move over a switch that is set in an incompatible position.</li>
      <li>Route Setting: When a route is set for a train to follow, the interlocking system ensures that all necessary signals and switches along the route are properly aligned before the train is allowed to proceed.</li>
      <li>Locking Mechanisms: Interlocking systems often employ mechanical or electronic locking mechanisms that physically or electronically prevent certain combinations of switch and signal positions that could result in unsafe conditions.</li>
      <li>Control Centers: In many modern railway systems, control centers play a central role in interlocking. Operators in these control centers monitor the status of signals and switches and make adjustments as needed to maintain safety and efficiency.</li>
      <li>Centralized and Distributed Interlocking: Interlocking systems can be centralized, where one central control point manages the entire network, or distributed, with local interlockings at various points along the railway.</li>
      <li>Fail-Safe Design: Interlocking systems are designed to be fail-safe, meaning that in the event of a failure or malfunction, they default to a safe state, such as displaying stop signals and locking switches in safe positions.</li>
      <li>Communication: Interlocking systems may include communication links with trains, allowing control center operators to provide instructions to train operators in real-time.</li>
      <li>Computer-Based Systems: Many modern interlocking systems are computer-based, utilizing advanced software to manage and control the railway infrastructure.</li>
      <p>Interlocking of signals is an integral part of ensuring the safe and efficient operation of railway networks. It helps to prevent accidents, keep train movements organized, and maintain the flow of traffic on the tracks. Railway personnel, including signal operators and control center staff, are trained to work with interlocking systems to ensure safe and reliable train operations.</p>
    </ul>
  </div>
        </>
    )
}
export default Signal;