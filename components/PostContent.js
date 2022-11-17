import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './postContent.module.css'

function Pics(props) {

    const pics = props.pics
    const [picOnClick, setPicOnClick] = useState(new Array(pics.length));
    let columns = 'grid-cols-1'
    const l = pics.length
    if (l <= 4 && l > 1) columns = 'grid-cols-2';
    else if (l > 4) columns = 'grid-cols-3';
    const handleClickButton = () => {

    }
    return (
        <>
            <div className={`grid  ${columns} gap-1 my-1 mr-2`} >
                {
                    pics.map((pic, index) => {
                        let url = 'url(' + pic + ')'
                        return (
                            <div key={index}>
                                {
                                    picOnClick[index] ?
                                        <img src={pic} style={{
                                            position: 'fixed',
                                            transform: 'translate(-50%, -50%)',
                                            left: '50%', top: '50%', height: '100%',
                                            objectFit: 'contain',
                                            zIndex: 50,
                                        }}
                                            onClick={() => {
                                                picOnClick[index] = false
                                                setPicOnClick([...picOnClick])
                                            }} /> :
                                        <div
                                            className="bg-cover  bg-no-repeat bg-center"

                                            style={picOnClick[index] ?
                                                {
                                                    backgroundImage: `${url}`, position: 'fixed', left: '50%', top: '50%', width: '50%',
                                                    height: '50%',
                                                    zIndex: 100,
                                                } :
                                                {
                                                    backgroundImage: `${url}`, height: '40vw', maxHeight: '300px'
                                                }}
                                            onClick={() => {
                                                picOnClick[index] = true
                                                setPicOnClick([...picOnClick])
                                            }}
                                        >
                                        </div>
                                }
                                <div className={[styles.mask, picOnClick[index] ? '' : styles.maskhide].join(' ')}></div>
                            </div>

                        )

                    })
                }

            </div>

        </>

    )

}

function Share(props) {
    const shares = props.share
    return (
        <>
            <div className="flex items-center p-1 bg-slate-200 mt-3 mb-1">
                <img src={shares.pic} alt="分享的图片" className=" w-10 h-10" />
                <span className="flex-1 text-sm mx-2">{shares.text}</span>
            </div>
        </>
    )
}
export default (props) => {
    const content = props.content
    let DetailContent
    switch (content.type) {
        case 0:
            DetailContent = <Pics pics={content.pics} />;
            // DetailContent = Pics(content.pics);
            break;
        case 1:
            DetailContent = <Share share={content.share} />;
            // DetailContent = Share(content.share)
            break;
    }


    return (
        <>
            <div className="item-msg block " style={{ whiteSpace: 'pre-wrap' }}> {content.text} </div>
            {DetailContent}

        </>
    )

}



