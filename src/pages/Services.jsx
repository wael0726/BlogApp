import React from 'react';
import image1 from '../assets/image.jpg'; // Import de l'image
import image2 from '../assets/image2.jpg'; // Import de l'image
import image3 from '../assets/image3.jpg'; // Import de l'image
import image4 from '../assets/image4.jpg'; // Import de l'image de la 4ème vidéo

const Videos = () => {
  return (
    <div className='text-black'>
      <div className='py-40 bg-gray-100 text-center px-4'>
        <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>Nos Vidéos</h1>
        <p className='text-lg text-gray-600 lg:w-3/5 mx-auto'>
          Explorez notre sélection de vidéos sur l'intelligence artificielle ! De ses bases fondamentales à ses implications éthiques et son futur, chaque vidéo vous propose un aperçu unique et informatif sur ce domaine fascinant. Plongez dans l'univers de l'IA et enrichissez vos connaissances à travers des contenus captivants et accessibles.
        </p>
      </div>

      <div>
        <section className="my-20 text-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 my-12">
              <div className="w-full md:w-1/3 px-4">
                <a href="https://youtu.be/_DtxYa8M6z4?si=ryQbr0M8keqes3Yk" target="_blank" rel="noopener noreferrer">
                  <div className="bg-black rounded-xl shadow-lg mb-8">
                    <img src={image1} alt="Video 1" className="w-full rounded-t-xl" />
                    <div className="text-center text-white p-4">
                      <h4 className="font-semibold text-xl">Introduction à l’intelligence artificielle : Qu’est-ce que l’IA ?</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <a href="https://youtu.be/vSobQ1KNmy8?si=V9oZE9rsLHaREjHE" target="_blank" rel="noopener noreferrer">
                  <div className="bg-black rounded-xl shadow-lg mb-8">
                    <img src={image2} alt="Video 2" className="w-full rounded-t-xl" />
                    <div className="text-center text-white p-4">
                      <h4 className="font-semibold text-xl">Qu'est ce que le machine learning ?</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <a href="https://youtu.be/W2hUgVwtULY?si=pjJhPG3tHyGbl3yc" target="_blank" rel="noopener noreferrer">
                  <div className="bg-black rounded-xl shadow-lg mb-8">
                    <img src={image3} alt="Video 3" className="w-full rounded-t-xl" />
                    <div className="text-center text-white p-4">
                      <h4 className="font-semibold text-xl">L’éthique et les défis de l’intelligence artificielle</h4>
                    </div>
                  </div>
                </a>
              </div>
              {/* Nouvelle vidéo */}
              <div className="w-full md:w-1/3 px-4">
                <a href="https://youtu.be/8v2vmCiurqU?si=RUa2C5yOJZVF2NGt" target="_blank" rel="noopener noreferrer">
                  <div className="bg-black rounded-xl shadow-lg mb-8">
                    <img src={image4} alt="Video 4" className="w-full rounded-t-xl" />
                    <div className="text-center text-white p-4">
                      <h4 className="font-semibold text-xl">Le futur de l’intelligence artificielle : À quoi s’attendre ?</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Videos;
