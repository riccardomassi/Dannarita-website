import Image from 'next/image';
import Link from 'next/link';

const PresentazioneHome = () => {
  return (
    <div className="relative h-screen w-full flex items-end justify-start lg:text-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/background_logo.jpg" 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
          className="object-center"
        />
      </div>
      
      {/* Text Content */}
      <div className="relative z-10 bg-black bg-opacity-80 shadow-2xl py-4 px-6 mx-4 mb-16 lg:mb-32 lg:ml-16 rounded-br-3xl rounded-tl-3xl font-serif text-center text-white">
        <p className="mb-2">Il nostro salone di bellezza vanta anni di esperienza nel settore dei trattamenti per capelli</p>
        <p className="mb-2">e si impegna costantemente ad offrire ai propri clienti</p>
        <p>un&apos;esperienza di bellezza dedicata interamente alle loro esigenze.</p>
        
        {/* Call-to-Action Button */}
        <div className="bg-zinc-700 hover:bg-zinc-500 border font-mono rounded-br-xl rounded-tl-xl inline-flex items-center shadow py-2 px-4 lg:py-3 lg:px-5 mt-6 lg:mt-8">
          <Link href="/Contatti">Contattaci</Link>
        </div>
      </div>
    </div>
  );
}

export default PresentazioneHome;
