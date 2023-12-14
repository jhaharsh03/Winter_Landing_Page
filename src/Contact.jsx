import React from 'react'
import styles from './style'
import  { layout } from './style'
import Layout from './Layout'
import { Button } from './components'
import Features from './Features'
import { features } from './constants'



function Contact() {
  return (
    // <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    //   <div className={`${styles.boxWidth}`}>
    //     <section id='contact' className={styles.layout.section}>
    //       {/* Content for Contact */}
    //       <p>Email: winteranddesign@gmail.com</p>
    //       <p>Contact No: 7060286069</p>
    //       <p>You can also contact us at: harshptct@gmail.com</p>
    //       <p>We are a web design agency running from IIT Indore. Let's build it!</p>
    //     </section>
    //   </div>
    // </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
    <section id='features' className='{layout.section}'>
<div className={layout.sectionInfo}>
<h2 className={styles.heading2}>
Contact Details<br className='sm: blockhidden' /> 

</h2>
<p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
Email: winteranddesign@gmail.com
</p>

{/* <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
Email: harshptct@gmail.com
</p> */}

<p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
Contact No.: +91 7879893307
</p>

<br />
<br />
<br />

<h2 className={styles.heading2}>
We’d love to hear from you. Tell us all the things.<br className='sm: blockhidden' /> 

</h2>

</div>

<br />
<br />

</section> 
     
</div>

</div>

  );
}

export default Contact;
