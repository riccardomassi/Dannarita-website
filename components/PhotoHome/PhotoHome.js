import Image from 'next/image';

const PhotoHome = () => {
  return (
    <div className="w-full text-black bg-amber-50 flex flex-col items-center justify-center text-2xl pt-10 px-4">
      {/* Layout per dispositivi piccoli (mobile/tablet) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 mt-6 mb-6 justify-items-center">
        <Image
          src="/home1.jpg"
          alt="Immagine 1"
          width={300}
          height={200}
          className="rounded-md"
          objectFit="cover"
        />
        <Image
          src="/home3.jpg"
          alt="Immagine 3"
          width={300}
          height={200}
          className="rounded-md"
          objectFit="cover"
        />
        <div className="flex justify-center md:col-span-2">
          <Image
            src="/home2.jpg"
            alt="Immagine 2"
            width={450}
            height={200}
            className="rounded-md"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-center md:col-span-2">
          <Image
            src="/home5.jpg"
            alt="Immagine 5"
            width={450}
            height={200}
            className="rounded-md"
            objectFit="cover"
          />
        </div>
        <Image
          src="/home4.jpg"
          alt="Immagine 4"
          width={300}
          height={200}
          className="rounded-md"
          objectFit="cover"
        />
        <Image
          src="/home6.jpg"
          alt="Immagine 6"
          width={300}
          height={200}
          className="rounded-md"
          objectFit="cover"
        />
      </div>

      {/* Layout per PC (schermi grandi) */}
      <div className="hidden lg:flex lg:flex-col">
        <div className="flex mt-6 mb-6 space-x-4">
          <Image
            src="/home1.jpg"
            alt="Immagine 1"
            width={300}
            height={200}
            className="rounded-md"
            objectFit="cover"
          />
          <Image
            src="/home2.jpg"
            alt="Immagine 2"
            width={450}
            height={200}
            className="rounded-md"
            objectFit="cover"
          />
          <Image
            src="/home3.jpg"
            alt="Immagine 3"
            width={300}
            height={200}
            className="rounded-md"
            objectFit="cover"
          />
        </div>
        <div className="flex space-x-4 mb-6">
          <Image
            src="/home4.jpg"
            alt="Immagine 4"
            width={300}
            height={200}
            className="rounded-md"
            objectFit="cover"
          />
          <Image
            src="/home5.jpg"
            alt="Immagine 5"
            width={450}
            height={200}
            className="rounded-md"
            objectFit="cover"
          />
          <Image
            src="/home6.jpg"
            alt="Immagine 6"
            width={300}
            height={200}
            className="rounded-md"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoHome;
