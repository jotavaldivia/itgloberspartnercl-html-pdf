import React, { useEffect, useState } from 'react';

type Props = {
    pdfUrl: string;
    width: number;
    height: number;

}

const PdfReader = ({ pdfUrl, width, height }: Props) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    return (
        mounted && (
            <div className='flex justify-center'>
                <object data={pdfUrl} type="application/pdf" width={width} height={height}>
                    <iframe title="PDF" src={pdfUrl} width={width} height={height}></iframe>
                    <p>Este navegador no soporta PDF</p>
                </object>
            </div>

        )
    );
}

export default PdfReader;
