
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Page() {
  const [img, setImg] = useState('puppy-eyes');
  const [how, setHow] = useState(false);
  const [p, setP] = useState<{ x: string; y: string } | null>(null);

  const updteImg = (im: string) => setImg(im);

//   const nah = () => {
//     const x = Math.random() * 90;
//     const y = Math.random() * 90;

//     setP({ x: `${x}%`, y: `${y}%` });
//     updteImg('unamused');
//   };
    const nah = () => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        console.log(`New position: x=${x}%, y=${y}%`);


        if (p && Math.abs(parseFloat(p.x) - x) < 10 && Math.abs(parseFloat(p.y) - y) < 10) {
        return nah(); 
        }
    
        setP({ x: `${x}%`, y: `${y}%` });
        updteImg('unamused');
    };
  

  const dontdoit = () => {
    nah();
    updteImg('shock');
    setHow(true);
  };

  return (
    // <div className="flex flex-col items-center justify-center w-full h-screen bg-black text-white relative">
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black text-white ">

      <img
        alt="gumball"
        className="w-40 h-40 mb-6 rounded-full border-4 border-white"
        src={`/${img}.gif`}
      />
      <h1 className="text-2xl font-bold mb-8 text-center">
        {how ? 'Hmmph, there’s no choice!' : 'Will you go out with me?'}
      </h1>
      <div className="relative flex gap-4  py-10w-full h-full">
        <Link to="/yay">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow transition justify-center items-center"
            onMouseOver={() => updteImg('sparkle-eyes')}
            onMouseOut={() => updteImg('puppy-eyes')}
          >
            Yes
          </button>
        </Link>


        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded shadow transition justify-center items-center"
          style={p ? { position: 'absolute', top: p.x, left: p.y } : undefined}
          onClick={dontdoit}
          onMouseOver={nah}
        >
          No
        </button>

      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Page() {
//   const [img, setImg] = useState('puppy-eyes');
//   const [how, setHow] = useState(false);
//   const [p, setP] = useState<{ x: string; y: string } | null>(null);

//   const updteImg = (im: string) => setImg(im);

//   const nah = () => {
//     const x = Math.random() * 100;
//     const y = Math.random() * 100;
//     console.log(`New position: x=${x}%, y=${y}%`);

//     // Prevent button from staying too close to its previous position
//     if (p && Math.abs(parseFloat(p.x) - x) < 10 && Math.abs(parseFloat(p.y) - y) < 10) {
//       return nah();
//     }

//     setP({ x: `${x}%`, y: `${y}%` });
//     updteImg('unamused');
//   };

//   const dontdoit = () => {
//     nah();
//     updteImg('shock');
//     setHow(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full h-screen bg-black text-white">
//       <img
//         alt="gumball"
//         className="w-40 h-40 mb-6 rounded-full border-4 border-white"
//         src={`/${img}.gif`}
//       />
//       <h1 className="text-2xl font-bold mb-8 text-center">
//         {how ? 'Hmmph, there’s no choice!' : 'Will you go out with me?'}
//       </h1>
//       <div className="relative w-full h-full">
//         <Link to="/yay">
//           <button
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow transition"
//             onMouseOver={() => updteImg('sparkle-eyes')}
//             onMouseOut={() => updteImg('puppy-eyes')}
//           >
//             Yes
//           </button>
//         </Link>
//         <button
//           className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded shadow transition absolute"
//           style={p ? { top: p.y, left: p.x, position: 'absolute' } : undefined}
//           onClick={dontdoit}
//           onMouseOver={nah}
//         >
//           No
//         </button>
//       </div>
//     </div>
//   );
// }
