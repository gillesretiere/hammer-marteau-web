import React, { useState } from 'react';
import HTMLPageFlip from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';

// Obligatoire pour charger le worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const BookViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="flex justify-center items-center bg-brand-bg py-10">
      <Document file={pdfUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        <HTMLPageFlip width={400} height={600} showCover={true} className="shadow-2xl">
          {/* On boucle sur les pages du PDF pour créer le livre */}
          {[...Array(numPages).keys()].map((pNum) => (
            <div key={pNum} className="bg-white border-l shadow-inner">
               <Page pageNumber={pNum + 1} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
            </div>
          ))}
        </HTMLPageFlip>
      </Document>
    </div>
  );
};

export default BookViewer;