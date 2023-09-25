"use client"

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  console.log('Hello Footer')
  return (
    <div className={styles.container}>
      <div>@2023 Lamamia. All rights reserved.</div>
        <div className={styles.socials}>
            <Image src="/1.png" width={15} className={styles.social} height={15} alt="lama Facebook"/>
            <Image src="/2.png" width={15} className={styles.social} height={15} alt="lama Instagram"/>
            <Image src="/3.png" width={15} className={styles.social} height={15} alt="lama Twitter"/>
            <Image src="/4.png" width={15} className={styles.social} height={15} alt="lama Youtube"/>
      </div>
    </div>
  )
}

export default Footer