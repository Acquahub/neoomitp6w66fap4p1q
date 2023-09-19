import React from 'react';
import Link from 'next/link';
import styles from './screen1.module.css';
import { Metadata } from "next";

import Image from 'next/image';


export const metadata: Metadata = {
                
}

function Screen1() {
    
    
    

    return(
        <div className={styles["Screen1"]}>
            
<div id="layer-1-fac1ddfa8eba4259a9027b53ca4c6a43" className={styles["layer-1-fac1ddfa8eba4259a9027b53ca4c6a43"]}    >
<div id="layer-2-1b2d841677e443eca5343ce2729bfc1d" className={styles["layer-2-1b2d841677e443eca5343ce2729bfc1d"]}    ></div>
<div className={styles["imageview-1-16f5dcece8b54e5f971bcd914647c32b"]}  >
    <Image id="imageview-1-16f5dcece8b54e5f971bcd914647c32b" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-1" src='https://i.ibb.co/5ndGgWv/image-43.png' />
</div>
</div>
        </div>
    );
}

export default Screen1;
            