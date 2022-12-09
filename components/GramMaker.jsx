import React, {useState, useCallback, useRef} from 'react'
import html2canvas from "html2canvas";
import { toJpeg, toPng } from 'html-to-image';

import  localFont  from "@next/font/local";
const baloo = localFont({src: '../public/fonts/Baloo2.ttf', weight: '400'})
const blubber = localFont({src: '../public/fonts/BubblerOne-Regular.ttf'})
const corinbold = localFont({src: '../public/fonts/Corinthia-Bold.ttf'})
const courgette = localFont({src: '../public/fonts/Courgette-Regular.ttf'})
const dancing = localFont({src: '../public/fonts/DancingScript-VariableFont_wght.ttf'})


export const GramMaker = () => {

  const ref = useRef(null)

  const [bgColor, setBgColor] = useState('#303d71')
  const [customImg, setcustomImg] = useState("center no-repeat url('')")
  const [fontColor, setfontColor] = useState('#ffffff')
  const [namesSize, setNamesSize] = useState('91px')
  const [dateSize, setDateSize] = useState('57px')
  const [names, setNames] = useState('Vince & Yancy')
  const [date, setDate] = useState('12 - 10 - 2029')
  const [shadow, setShadow] = useState('')
  const [fontFamNames, setfontFamNames] = useState(dancing.style.fontFamily)
  const [fontFamDate, setfontFamDate] = useState(blubber.style.fontFamily)
  const [isDoubled, setisDoubled] = useState(false)

  function setFontFam(val) {

    switch (val) {
      case 'baloo':
        return baloo.style.fontFamily

      case 'corinbold':
        return corinbold.style.fontFamily

      case 'courgette':
        return courgette.style.fontFamily

      case 'dancing':
        return dancing.style.fontFamily

      case 'blubber':
        return blubber.style.fontFamily
    
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
        setShadow('#000000c9 4px 3px 3px')
        break;
    
      default:
        break;
    }

  }

  const delay = s => new Promise(res => setTimeout(res, s * 1000));

  const  exportImg = async () => {

    if (ref.current === null) return

    console.log();

    setisDoubled(true)
    await delay(1);

    const dataUrl = await toJpeg(ref.current);
 
    // download image
    const link = document.createElement('a');
    link.download = `footer--${date}--${names}.jpg`;
    link.href = dataUrl;
    link.click();

    // await delay(8);
    setisDoubled(false)
  }


  return (<>
    <div className="makeagram">

      <div className="strip-preview">
        <h2>Photo Strip Preview </h2>
        <ul className='booth-pics'>
          <li>😀</li>
          <li>😎</li>
          <li>🤔</li>
          <li>😁</li>
        </ul>

        <div className="gramcanvas" style={{backgroundColor: bgColor}}>
          <div className="left" style={{background: customImg, backgroundSize: 'contain'}}>
            <h3 style={ {color: fontColor, fontSize: namesSize, textShadow: shadow, fontFamily: fontFamNames}}>{names}</h3>
            <h4 style={{color: fontColor, fontSize: dateSize, textShadow: shadow, fontFamily: fontFamDate}}>{date}</h4>
          </div>
        </div>
      </div>

      <div className="canvas-wrapper">
        <div ref={ref} className="gramcanvas" style={{backgroundColor: bgColor}}>
          <div className="left" style={{background: customImg, backgroundSize: 'contain'}}>
            <h3 style={ {color: fontColor, fontSize: namesSize, textShadow: shadow, fontFamily: fontFamNames}}>{names}</h3>
            <h4 style={{color: fontColor, fontSize: dateSize, textShadow: shadow, fontFamily: fontFamDate}}>{date}</h4>
          </div>
          {isDoubled && (
            <div className="right" style={{background: customImg, backgroundSize: 'contain'}}>
              <h3 style={ {color: fontColor, fontSize: namesSize, textShadow: shadow, fontFamily: fontFamNames}}>{names}</h3>
              <h4 style={{color: fontColor, fontSize: dateSize, textShadow: shadow, fontFamily: fontFamDate}}>{date}</h4>
            </div>
          )}
        </div>
      </div>

      <div className="editor">

        <div className="form">
          <div className="form-item">
            <input type="text" className='text' placeholder={names} onChange={(e) => setNames(e.target.value)} /> 
            <input type='range' min='25' max='200' defaultValue={namesSize} className='slider' onChange={(e) => setNamesSize(e.target.value + 'px')}/>
          </div>

          <div className="form-item">
            <input type="text" className='text' placeholder={date} onChange={(e) => setDate(e.target.value)} /> 
            <input type='range' min='20' max='200' defaultValue={dateSize} className='slider' onChange={(e) => setDateSize(e.target.value + 'px')}/>
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
              <option value='blubber'> blubber </option>
            </select>
          </div>
          <div className="form-item select">
            <h2>Date Font Choice</h2>
            <select onChange={(e) => setfontFamDate(setFontFam(e.target.value))}>
              <option value='baloo'> baloo</option>
              <option value='corinbold'> corinbold</option>
              <option value='courgette'> courgette</option>
              <option value='dancing'> dancing </option>
              <option value='blubber'> blubber </option>
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

          <hr />

          <div className="form-item">
            <h2>Custom Image</h2>
            <input type="file" accept="image/*" onChange={(e) => setcustomImg(`center no-repeat url(${URL.createObjectURL(e.target.files[0])})`)} />
          </div>

          

          {!isDoubled && (
            <button className='btn--Med' onClick={exportImg}>Save Image</button>
          )}

          {isDoubled && (
            <p className='btn--Med' style={{backgroundColor: 'grey'}}>saving image...</p>
          )}
        </div>

      </div>

    </div>
    <small>monogram = 625px x 350px</small> 
    <br />
    <small>Strip = 4in x 6in</small>

    
  </>)
}
