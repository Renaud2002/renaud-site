import React from 'react';

function Intro(){
    return (
        <div className='flex items-center justify-center flex-col
        text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-4xl
            md-1 md:mb-3 font-bold'>Renaud Fred</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Junior Computer Sceince Student @ GWU</p>
            <p className='text-sm max-w-xl mb-6 font-medium'>Hello, I am a junior majoring in computer science at the George Washington University. 
            Alongside my major, I am pursuing a minor in physics and considering a double major.
            Currently, I lead the payload subteam for the GW Rocket team and work as a student trainee in computer science at the Naval Research Lab, I also work as student staff member at the GW Innovation Center.  
            <br></br>
            <br></br>
            Additionally, I am conducting research with <a href="https://www2.seas.gwu.edu/~arkady/" target="_blank" className="text-green-700">Professor Arkady Yerukhimovich</a> in Quantum Cryptography. My primary interests in computer science encompass Quantum computing, embedded systems, IoT, and theoretical computer science, particularly cryptography. I am always eager to expand my knowledge and explore new areas.</p>
        </div>
    )
}

export default Intro;