import * as S from './style.js'

export default function Menu() {
  return (
    <S.Menu>
      <S.Add      >Add</S.Add>
      <S.Selector>Daily</S.Selector>
      <S.Selector>Monthly</S.Selector>
      <S.Selector>Yearly</S.Selector>
      <S.Selector>General</S.Selector>
    </S.Menu>
  )
}
