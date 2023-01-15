import { useState } from 'react';
import * as S from './style.js';

export default function Manager({subjects}) {
  
  console.log()


  return (
      <>
        <S.Manager style={{right: subjects.every((e) => e === false) && "-310px"}} >
          
        </S.Manager>
      </>
    )
  }