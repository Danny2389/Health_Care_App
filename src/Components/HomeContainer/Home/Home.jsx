import React from 'react'
import { Special } from '../specialist'

import { Pediatrician } from '../Pediatrician'
import { Medicine } from '../MedicineRemainder'
import { WhyChoose } from '../WhyChoose'
import { Checkup } from '../Checkup'
import { Review } from '../Review'
import { Appointment } from '../Appointment'
import { Meet } from '../Meet'
import { Scroll } from '../Scroll'


export const Home = () => {
  return (
    <><Special/> 
<Meet/>
<Scroll/>
   <Medicine/>
    <Pediatrician/>
    <WhyChoose/>
    <Checkup/>
    <Review/>
    <Appointment/>
    </>
  )
}
