import { useState, useEffect } from 'react'
import * as S from './style.js'

export default function Notepad({notes, notesCheckboxes, sendCheckboxes}) {
  return (
    <>
      <S.Notepad>
        <div className="tablerow">
          <div className="mark"></div>
          <div className="tableheader title">Title</div>
          <div className="tableheader">Description</div>
          <div className="tableheader date">Date Added</div>
          <div className="tableheader date">Date Due</div>
        </div>
        {notes.map((note, index) => (
          <div className="tablerow" key={note.toString()+index}>
            <div className="mark">
              <div className={notesCheckboxes[index] ? "checkbox_true" : "checkbox_false"}
              id={index}
              onClick={() => {
                let temp = structuredClone(notesCheckboxes);
                temp[index] = !temp[index];
                sendCheckboxes(temp);
              }}
              tabIndex="0"
              onKeyDown={(e) => {if(e.keyCode === 13){
                let temp = structuredClone(notesCheckboxes);
                temp[index] = !temp[index];
                sendCheckboxes(temp);
              }}}
              ></div>
            </div>
            <div className="tabledata title">{note[0]}</div>
            <div className="tabledata">{note[1]}</div>
            <div className="tabledata date">{note[2]}</div>
            <div className="tabledata date">{note[3]}</div>
          </div>
        ))}
      </S.Notepad>
    </>
  )
}