import React, { useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import * as AsciinemaPlayerLibrary from 'asciinema-player';

type AsciinemaPlayerProps = {
    src: string;
    // START asciinemaOptions
    cols: string;
    rows: string;
    autoPlay: boolean
    preload: boolean;
    loop: boolean | number;
    startAt: number | string;
    speed: number;
    idleTimeLimit: number;
    theme: string;
    poster: string;
    fit: string;
    fontSize: string;
    // END asciinemaOptions
};

const AsciinemaPlayer: React.FC<AsciinemaPlayerProps> = ({
    src,
    ...asciinemaOptions
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        AsciinemaPlayerLibrary.create(src, currentRef, asciinemaOptions);
    }, [src]);

    return (
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <div ref={ref} />}
      </BrowserOnly>
    );
};

export default AsciinemaPlayer;
