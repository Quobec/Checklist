import * as S from './style.js'
import { useRouter } from 'next/router';

export default function Menu() {

  const router = useRouter();
  
  return(

    <S.Menu>
      <S.Add      >Add</S.Add>
      <S.Selector>Daily</S.Selector>
      <S.Selector onClick={router.push('/weekly')}>Weekly</S.Selector>
      <S.Selector>Monthly</S.Selector>
      <S.Selector>Yearly</S.Selector>
      <S.Selector>General</S.Selector>
    </S.Menu>
  )
}
