'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type GridCardData = {
  imgUrl?: string;
  title?: string;
};

const ArticleCards = ({ data, path }: { data: GridCardData[], path?: string }) => {
  // State to manage modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  // Open modal with the clicked image
  const openModal = (imgUrl?: string) => {
    if (imgUrl) {
      setSelectedImg(imgUrl);
      setIsModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImg(null);
  };

  return (
    <div className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 p-4'>
        {data.map(({ imgUrl, title }, index) => (
          title ? (
            path !== null ? (
              <Link key={index} href={`article/loan-${title.replace(/[^A-Za-z0-9]+/g, '-')}`}>
                <div className='flex flex-col cursor-pointer overflow-hidden rounded-lg shadow-sm'>
                  <div className="relative w-full h-60">
                    {imgUrl ? (
                      <Image
                        src={`/articleassets/articleimages/${imgUrl}`}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 rounded-t-lg"></div> // Placeholder for missing image
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-md sm:text-lg font-medium">{title}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <Link key={index} href={`/${title}`}>
                <div className='flex flex-col cursor-pointer overflow-hidden rounded-lg shadow-sm'>
                  <div className="relative w-full h-60">
                    {imgUrl ? (
                      <Image
                        src={`/articleassets/articleimages/${imgUrl}`}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 rounded-t-lg"></div> // Placeholder for missing image
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-md sm:text-lg font-medium">{title}</p>
                  </div>
                </div>
              </Link>
            )
          ) : (
            <div
              key={index}
              className='flex flex-col cursor-pointer overflow-hidden rounded-lg shadow-sm'
              onClick={() => openModal(imgUrl)}
            >
              <div className="relative w-full h-60">
                {imgUrl ? (
                  <Image
                    src={`/articleassets/articleimages/${imgUrl}`}
                    alt={title || 'Image'}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 rounded-t-lg"></div> // Placeholder for missing image
                )}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {isModalOpen && selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // Close modal on click outside the image
        >
          <div className="relative w-11/12 h-5/6">
            <Image
              src={`/articleassets/articleimages/${selectedImg}`}
              alt="Fullscreen Image"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer rounded-lg"
            />
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleCards;
