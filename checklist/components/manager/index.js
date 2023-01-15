import { useState } from 'react';
import * as S from './style.js';

export default function Manager({subjects}) {

    const[checkboxes, setCheckboxes] = useState([]);
    
    return (
      <>
        <S.Manager onClick={(()=> { console.log(subjects)})}></S.Manager>

      </>
    )
  }