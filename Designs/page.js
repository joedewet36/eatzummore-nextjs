import Image from 'next/image';

import styles from '../public/style.module.css'


export default function Home() {
  return (

 <div className={styles.login}>
      <div className={styles.div}>
        <div className={styles.overlap}>
          <div className={styles.overlapgroup}>
            <div className={styles.ellipse} />
            <h1 className={styles.textwrapper} >Login</h1>
      
            <Image
              src="/img/group-767.png"
              alt="Group"
              className={styles.group}
              width={100}
              height={24}
              priority
            />
 
            <Image
              src="/img/chevron-left.svg"
              alt="Chevron left"
              className={styles.chevronleft}
              width={24}
              height={24}
              priority
            />
          </div>
          <div className={styles.textwrapper2}>email</div>
        </div>
        <div className={styles.divwrapper}>
          <a className={styles.textwrapper3} href="mailto:yourmail@mail.com" rel="noopener noreferrer" target="_blank">
            yourmail@mail.com
          </a>
        </div>
        <div className={styles.overlap2}>
          <div className={styles.textwrapper4}>your password</div>
          <Image
              src="/img/vector.svg"
              alt="Vector"
              className={styles.vector}
              width={24}
              height={20}
              priority
            />
        </div>
        <div className={styles.frame}>
          <div className={styles.textwrapper5}>Login</div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.textwrapper6}>Don’t have an account?</div>
          <div className={styles.textwrapper7}>Register</div>
        </div>
        <div className={styles.textwrapper8}>password</div>
        <div className={styles.textwrapper9}>Forgot Password</div>
        <div className={styles.darkmodefalse} >
          <div className={styles.rightside}>
  
            <Image
              src="/img/battery.png"
              alt="Battery"
              className={styles.battery}
              width={24}
              height={11}
              priority
            />

            <Image
              src="/img/wifi.svg"
              alt="Wifi"
              className={styles.wifi}
              width={15}
              height={11}
              priority
            />
     
            <Image
              src="/img/mobile-signal.svg"
              alt="Mobile signal"
              className={styles.mobilesignal}
              width={17}
              height={11}
              priority
            />
          </div>
          <Image
              src="/img/left-side.png"
              alt="Left side"
              className={styles.leftside}
              width={54}
              height={21}
              priority
            />
        </div>
      </div>
    </div>

  )
}
