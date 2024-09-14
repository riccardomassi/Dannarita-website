import Image from 'next/image';

const PresentazioneAcconciature = () => { 
  return (
    <div className="min-h-screen w-full text-black bg-amber-50 flex flex-col items-center justify-center text-2xl py-10">
      {/* Text Block */}
      <div className="relative mx-20 mb-10 mt-20">
        <div className="bg-black py-6 px-10 bg-opacity-10 rounded-br-3xl rounded-tl-3xl font-serif text-center">
          <p>La bellezza dei capelli è la nostra vocazione: il personale altamente qualificato e specializzato in acconciature,</p>
          <p>trattamenti di rigenerazione, tagli e colorazioni, vi accoglierà in un ambiente moderno e rilassante,</p>
          <p>dotato di tecnologie all&apos;avanguardia e di prodotti di elevata qualità.</p>
          <br />
          <p>Grazie alla passione e all&apos;attenzione per i dettagli, ci preoccupiamo di offrire un servizio personalizzato,</p>
          <p>in grado di soddisfare le diverse esigenze di ogni cliente.</p>
        </div>
      </div>

      {/* Images for large screens */}
      <div className="hidden lg:flex space-x-4 mb-4">
        <Image
          src="/acconciature1.jpg"
          alt="Immagine 7"
          width={450}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/acconciature2.jpg"
          alt="Immagine 8"
          width={450}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/acconciature3.jpg"
          alt="Immagine 9"
          width={450}
          height={200}
          className="rounded-lg"
        />
      </div>

      {/* Images for mobile screens */}
      <div className="lg:hidden flex flex-col space-y-4 mb-4 px-6">
        <Image
          src="/acconciature1.jpg"
          alt="Immagine 7"
          width={450}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/acconciature2.jpg"
          alt="Immagine 8"
          width={450}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/acconciature3.jpg"
          alt="Immagine 9"
          width={450}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default PresentazioneAcconciature;
