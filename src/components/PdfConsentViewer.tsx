import { useState } from 'react';

interface PdfConsentViewerProps {
  pdfPath: string;
  title: string;
}

export default function PdfConsentViewer({ pdfPath, title }: PdfConsentViewerProps) {
  const [consent, setConsent] = useState(false);

  if (!consent) {
    return (
      <div className="flex flex-col items-center p-2 md:p-8">
        <div className="max-w-2xl text-center text-lg tracking-tight text-blue-900 mb-6">
          Pour afficher le PDF directement sur cette page, nous utilisons le visualiseur Google
          Docs. En l'activant, vous acceptez que vos données soient traitées conformément à la <a
            href="https://policies.google.com/privacy?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800">politique de confidentialité de Google</a
          >. Alternativement, vous pouvez télécharger le PDF pour le lire localement.
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a 
            href={pdfPath} 
            download
            className="inline-flex whitespace-nowrap items-center justify-center rounded-2xl p-4 text-base font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Non merci, télécharger le PDF
          </a>
          <button 
            className="inline-flex whitespace-nowrap items-center justify-center rounded-2xl p-4 text-base font-semibold bg-blue-600 text-white hover:bg-blue-500 active:text-white/70 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            onClick={() => setConsent(true)}
          >
            Accepter et afficher
          </button>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={`https://docs.google.com/viewer?url=https://controleia.org${pdfPath}&embedded=true`}
      width="100%"
      height="100%"
      title={title}
    />
  );
} 