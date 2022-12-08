import React, {useState, useCallback, useRef} from 'react'
import html2canvas from "html2canvas";
import { toJpeg, toPng } from 'html-to-image';

import  localFont  from "@next/font/local";
const baloo = localFont({src: '../public/fonts/Baloo2.ttf', weight: '400'})
const corinbold = localFont({src: '../public/fonts/Corinthia-Bold.ttf'})
const courgette = localFont({src: '../public/fonts/Courgette-Regular.ttf'})
const dancing = localFont({src: '../public/fonts/DancingScript-VariableFont_wght.ttf'})


export const GramMaker = () => {

  const ref = useRef(null)

  const [bgColor, setBgColor] = useState('#303d71')
  const [fontColor, setfontColor] = useState('#ffffff')
  const [namesSize, setNamesSize] = useState('40px')
  const [dateSize, setDateSize] = useState('30px')
  const [names, setNames] = useState('Vince & Yancy')
  const [date, setDate] = useState('12 - 10 - 2029')
  const [shadow, setShadow] = useState('')
  const [fontFamNames, setfontFamNames] = useState(dancing.style.fontFamily)
  const [fontFamDate, setfontFamDate] = useState(baloo.style.fontFamily)

  function setFontFam(val) {

    switch (val) {
      case 'baloo':
        return baloo.style.fontFamily

      case 'corinbold':
        return corinbold.style.fontFamily

      case 'courgette':
        return courgette.style.fontFamily
    
      default:
        break;
    }
  }

  function setTextShadow(selection) {

    switch (selection) {
      case 'subtle':
        setShadow('black 2px 2px 17px')
        break;
        
      case 'dramatic':
        setShadow('black 7px 9px 15px')
        break;
        
      case 'crisp':
        setShadow('black 4px 8px 3px')
        break;

    
      default:
        break;
    }

  }

  const  exportImg = useCallback(() => {
    if (ref.current === null) return

    console.log('save image btn');

    var canv = document.getElementById('gramcanvas')

    // html2canvas(canv).then((canvas)=>{
    //   var image = canvas.toDataURL('image/jpg', 1.0);
    //   saveAs(image, 'new-image.jpg') 
    // })
    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])


  return (<>
    {/* <canvas id="myCanvas" width="200" height="100" style={{border: "1px solid #FFF"}}>
      <h3>Ted & Shelly</h3>
      <h4>12 - 10 - 2027</h4>
      asdfasdfasdf
    </canvas> */}
    <div className="makeagram">

      <div ref={ref} id="gramcanvas" style={{border: "1px solid #FFF", backgroundColor: bgColor}}>
        <h3 style={ {color: fontColor, fontSize: namesSize, textShadow: shadow, fontFamily: fontFamNames}}>{names}</h3>
        <h4 style={{color: fontColor, fontSize: dateSize, textShadow: shadow, fontFamily: fontFamDate}}>{date}</h4>
      </div>

      <div className="editor">
        <form>

          <div className="form-item">
            <input type="text" className='text' placeholder={names} onChange={(e) => setNames(e.target.value)} /> 
            <input type='range' min='25' max='100' defaultValue={namesSize} className='slider' onChange={(e) => setNamesSize(e.target.value + 'px')}/>
          </div>

          <div className="form-item">
            <input type="text" className='text' placeholder={date} onChange={(e) => setDate(e.target.value)} /> 
            <input type='range' min='20' max='100' defaultValue={dateSize} className='slider' onChange={(e) => setDateSize(e.target.value + 'px')}/>
          </div>
  

          <div className="form-item">
            <input type="color" name="colorpicker" id="colorpicker" onChange={(e) => setfontColor(e.target.value)} defaultValue={fontColor}/>
            <label>Text Color</label>
          </div>

          <div className="form-item">
            <input type="color" name="colorpicker" id="colorpicker" onChange={(e) => setBgColor(e.target.value)} defaultValue={bgColor}/>
            <label>Background Color</label>
          </div>
          <hr />

          <div className="form-item select">
            <h2>Name Font Choice</h2>
            <select onChange={(e) => setfontFamNames(setFontFam(e.target.value))}>
              <option value='baloo'> baloo</option>
              <option value='corinbold'> corinbold</option>
              <option value='courgette'> courgette</option>
              <option value='dancing'> dancing </option>
            </select>
          </div>
          <div className="form-item select">
            <h2>Date Font Choice</h2>
            <select onChange={(e) => setfontFamDate(setFontFam(e.target.value))}>
              <option value='baloo'> baloo</option>
              <option value='corinbold'> corinbold</option>
              <option value='courgette'> courgette</option>
              <option value='dancing'> dancing </option>
            </select>
          </div>

          <div className="form-item radio">
            <h2>Text Shadow</h2>
            <lable>
              <input type="radio" value="subtle" name="shadow" onChange={(e) => setTextShadow(e.target.value)}/> 
              subtle
            </lable>
            <lable>
              <input type="radio" value="dramatic" name="shadow" onChange={(e) => setTextShadow(e.target.value)}/> 
              dramatic
            </lable>
            <lable>
              <input type="radio" value="crisp" name="shadow" onChange={(e) => setTextShadow(e.target.value)}/> 
              crisp
            </lable>
          </div>


          <button onPointerUp={exportImg()}>Save Image</button>

          
        </form>
      </div>

    </div>
    <small>625px x 350px</small>

    
  </>)
}
