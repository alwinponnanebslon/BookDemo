import React, { useCallback, useEffect, useState } from 'react'
import HTMLFlipBook from "react-pageflip";
import A from "../assets/images/a.jpg"
import styles from "./Book.module.css"
import Icon from 'react-web-vector-icons';
// import Speech from 'react-speech';
// import { SayButton } from 'react-say';
import Play from '../assets/images/play.png'
import Stop from '../assets/images/stop.png'
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Book() {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const [value, setValue] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    const { speak } = useSpeechSynthesis();




    useEffect(() => {
        let h = window.innerHeight
        setHeight(h)
        let w = window.innerWidth
        setWidth(w)
    }, [])



    return (
        <div className={`${styles.container}`}>
            <div style={{ position: "relative", top: 150, zIndex: 2500 }}>
            </div>

            <div className={`${styles.TopRowcontainer}`}>
                <div className={`${styles.row}`}>
                    <div className={`${styles.heading}`}>
                        Diary of a Wimpy Kid (Book 1)
                    </div>
                </div>
            </div>
            <button onClick={() => speak({ text: value })} className={`${styles.PlayButton}`}>
                <img src={Play} className={`${styles.buttonIcon}`} />
            </button>
            <div className={`${styles.closeButton}`}>
                x
            </div>

            <div className={`${styles.bookContainer}`}>
                <div className={`${styles.page1}`}>
                    <div className={`${styles.paragraph}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className={`${styles.paragraph}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div className={`${styles.page2}`}>
                    <div className={`${styles.paragraph}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className={`${styles.paragraph}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
        </div>
    )
}
