import { createGlobalStyle} from "styled-components"

// import Font1 from '../public/fonts/Baloo2.ttf'


export const GlobalStyles = createGlobalStyle`

  .makeagram{
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .strip-preview{
      transform: scale(.5);
      transform-origin: bottom;
      margin-top: -65em;
      box-shadow: #00000080 3px 3px 19px;

    }


    .editor{
      border-left: double #4444445e 3px;
      margin-left: 1em;
      padding-left: 1em;
      width: 20em;

      .form{
        display: flex;
        flex-direction: column;

        h2{
          font-size: 15px;
          margin-bottom: 5px;
        }

        input{
          margin: 1em 0;
          
          &[type="text"]{
            padding: .3em;
          }
          &[type="color"]{
            height: 3em;
            width: 4em;
          }
        }

        label{
          margin: 0 10px;
        }

        .radio{
          display: flex;
          flex-direction: column;

          input{
            margin-right: 1em;
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    .booth-pics{
      list-style: none;
      text-align: center;
      margin: 0;
      padding: 0;
      
      li{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 80px;
        background-color: whitesmoke;
        width: 625px;
        height: 350px;
        margin: 0;
        padding: 0;
        border-bottom: solid 2px darkgray;
      }
    }
    .canvas-wrapper{
      border: solid 2px darkgray;
    }
    .gramcanvas{
      text-align: center;
      /* border: solid 1px #FFF; */
      height: 350px;
      /* width: 625px; */
      /* width: 1250px; */
      position: relative;
      
      display: flex;
      
      .left, .right{
        /* border: solid 1px yellow; */
        height: 350px;
        width: 625px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      h4, h3{
        margin: 0;
      }
    }
  }

  @media (prefers-color-scheme: dark){
    :root{
      --c-1: #1aaa6b;
      --c-2: #7fad9e;
      --c-3: #152a14; 

      --c-nav: #141414;
      --c-dark: #ffffff;
      --c-light: #000000;
      --c-code: #2c3540;
      --c-code-txt: #cccbbe;
      --c-head: #332f19;
      --c-strike: #808080;

      --c-txt: white;
      --c-body: #28252c;
      
      --c-bold: #ffffbd;
      --c-ital: rgb(179, 179, 179);
      --c-h2: #7fad9e;
    }
    html {
      color-scheme: dark;
    }
  }
  @media (prefers-color-scheme: light){
    :root{
      --c-1: #1aaa6b;
      --c-2: #7fad9e;
      --c-3: #152a14;

      --c-nav: #575757;
      --c-dark: #ffffff;
      --c-light: #000000;
      --c-code: #4b5557;;
      --c-code-txt: #cccbbe;
      --c-head: #332f19;
      --c-strike: #808080;

      --c-txt: black;
      --c-body: whitesmoke;
      --c-bold: #ffffbd;
      --c-ital: rgb(179, 179, 179);
    }
    html {
      color-scheme: light;
    }
  }

  :root{
    --width-cont: 1000px;
    --b-hrzLine: solid var(--c-strike) 1px;

    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  * {
    box-sizing: border-box;
  }

  html, body{
    padding: 0;
    margin: 0;
  }
  body {
    background: var(--c-body);
    color: var(--c-txt);
    overflow: overlay;
    transition: all 0.30s linear;
    
  }


  ::-webkit-scrollbar { 
    background: transparent;
    width: 5px;
    height: 10px;
    z-index: 999999;
  }  
    
  ::-webkit-scrollbar-track { 
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 999999;
  }  
    
  ::-webkit-scrollbar-thumb {  
    background: var(--c-1);  
    border-radius: 20px;
    z-index: 999999;
  }
  div.layout-wrap main{
    margin: 0 auto;
    width: var(--width-cont);
  }

  h2, h3 {
    scroll-margin-top: 16px;
    margin-bottom: 0;
  }
  @supports (-webkit-hyphens:none) { 
    h2, h3 {
      padding-top: 16px;
      margin-top: -16px;
    }
  }
  h1{color: var(--c-txt); font-size: 50px}
  h2{color: var(--c-h2); font-size: 35px}
  h3{color: var(--c-2); font-size: 30px}

  a{
    color: var(--c-1);
    transition: .3s;
    text-decoration: dotted;
  }
  a:hover{
    opacity: .7;
  }

  button, input {
    cursor: pointer;
    transition: .3s;

    &:hover{
      opacity: .7;
    }
  }

  .btn--Med{
    background-color: var(--c-1);
    color: var(--c-dark);
    display: block;
    border: solid var(--c-1) 2px;
    border-radius: 5px;
    /* width: 7em; */
    padding: 2em;

    margin: 1em 0;
    text-align: center;
    text-decoration: none;
  }

  button.theme{
    position: absolute;
    top: 5px;
    left: 40px;
  }

  button.navSize{
    position: absolute;
    top: 5px;
    left: 5px;
  }

  ul, ol{
    li{
      margin-bottom: .4em;
    }
  }

  hr{
    border: var(--b-hrzLine);
    width: 100%;
    margin: 2em 0;
  }
  strong{
    font-size: large;
    color: var(--c-strong);
  }
  i{
    color: var(--c-ital);
  }
  strike{
    color: var(--c-strike);
  }
  li.task-list-item:has(input:checked){
    opacity: .6;
    text-decoration:line-through;
  }

  blockquote{
    border: 1px solid var(--c-1);
    border-left: 5px solid var(--c-1);
    padding: 0 1em;
  }
  code{
    background-color: var(--c-code);
    color: var(--c-code-txt);
    border-radius: 5px;
    padding: 0 .5em;
  }

  .tag{
    color: var(--c-txt);
    border: solid var(--c-1) 1px;
    border-radius: 20px;
    margin-right: .3em;
    padding: 0 1em;
  }

  section {
    padding: 1em;
    margin: 1em 0;
    background-color: var(--color-bg);
  }

  header{
    border-bottom: solid 2px var(--c-1);
    box-shadow: #000000bd 3px 3px 9px;
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
  }

  .layout-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // margin: 0 auto;

    .content-cont{
      flex-grow: 1;
      // height: 100vh;
    }

    footer{
      width: 100%;
      margin-top: 15em;
      text-align: center;
      background-color: var(--c-3);
      padding: 2em 0;
    }
  }

  .horizontal-wrap{
    display: flex;
    height: 100vh;
    margin-right: auto;
  }

  .pressStart{
    a{
      border: solid white 1px;
      border-radius: 5px;
      padding: .3em;
      font-size: 3em;
    }
  }


  aside .GraphNTable{
    position: sticky;
    position: -webkit-sticky;
    top: 0px; 
  }



  .contains-task-list{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }


  table{
    width: 100%;
    border-bottom: 2px solid var(--c-3);

    th{
      background-color: var(--c-3);
      color: var(--c-1);
      padding: .5em;
      border-bottom: 2px solid var(--c-1);
    }   
  

    tbody{

      tr{
        &:nth-child(even){
          background-color: rgba(255, 255, 255, 0.096);
        }
        
        &:hover{
          background-color: rgba(255, 255, 0, 0.123);
        }
        td{
          padding: .3em;
        }
      }
    }
  }


  .imgWrapper{
    transition: 1s;
    display: inline-flex;
    flex-direction: column;
    margin: .5em;
    cursor: zoom-in;

    > span{ 
      outline: solid rgb(80, 80, 80) 1px;
      box-shadow: #000000 1px 1px 4px 2px;
      transition: inherit;
    }

    small.caption{
      color: grey;
      display: inline-table;
      text-align: end;
      padding: 1em .5em;
      transition: inherit;

      span{
        padding: 1em .5em;
      }
    }

    &:hover{
      > span{
        outline: dotted rgb(154, 154, 154) 1px;
        box-shadow: #000000a8 2px 2px 11px 5px;
      }

      small.caption{
        span{
          background-color: #303a00;
          color: rgb(204, 204, 204);
        }
      }
    }
  }

  .editBtns{
    padding: 1em 0;

    .btn{
      margin-right: 1em;
      padding: .5em;
      transition: .5s;

      svg{
        height: 30px;
        width: 30px;
      }
    }

    .editMe{
      border: solid var(--c-1) 1px;
      border-radius: 3px;
      display: inline-block;

      &:hover{
        border: solid white 1px;
        background-color: var(--c-1);
        color: white;
      }
    }

    .deleteBtn{
      color: red;

      &:hover{
        color: white;
        background-color: red;
        border: solid white 2px;
      }
    }
  }

  .planner-cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .card{
      border: solid 1px white;
      width: 10em;
      border-radius: 5px;
      text-align: center;

      h4{
        background-color: var(--c-1);
        padding: 1em;
        margin-top: 0;
        height: 4em;
      }

      ul{
        list-style: none;
        margin: 0;
        padding: 0;
      }

    }
  }
`