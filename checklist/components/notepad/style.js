import styled from 'styled-components';

export const Notepad = styled.div`
    display: flex; 
    width: 80%;
    min-height: 100vh;
    height: fit-content;
    vertical-align: top;
    background-color: #ccc;
    flex-direction: column;
    border-collapse: collapse;

    .tablerow{
        width: 99%;
        min-height: 50px;
        height: fit-content;
        background-color: #777;
        display: flex;
        margin: 5px;
        margin-bottom: 0px;
        border-radius: 10px;
    }

    .tableheader,
    .tabledata {
        width: 70%;

        border-left: 1px solid black;
        border-right: 1px solid black;
        
        &:first-child {
            border-left: none;
        }

        &:last-child {
            border-right: none;
        }
    }
    
    .tableheader{
        color: white;
        text-align: center;
        font-size: 20px;
        line-height: 50px;
    }

    .tabledata{
        color: black;
        text-align: center;
    }

    .mark{
        display: flex;
        width:50px;
        align-items: center;
        justify-content: center;
        align-self: stretch;
        background-color: #666;
        border-radius: 10px 0px 0px 10px;
        border-right: 1px solid black;
    }
    
    .checkbox_false{
        width: 20px;
        height: 20px;
        background-color: #777;
        border: 2px solid black;
        border-radius: 5px;
        transition: 0.1s;
    }

    .checkbox_true{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        background-color: #0099ff;
        border: 2px solid black;
        border-radius: 5px;
        transition: 0.1s;
    }
    .checkbox_true::before{
        content: '✖';
    }

    .date{
        width: 10%;
    }
    .title{
        width: 20%;
    }

    .tablerow:last-child{
        margin-bottom: 325px;
    }

    .tablerow:hover{
        background-color: #aaa;
    }
`;