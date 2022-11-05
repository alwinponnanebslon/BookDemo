import React, { useEffect, useState } from "react";
import styles from "./Book.module.css";
import { useSpeechSynthesis } from "react-speech-kit";
import Play from "../assets/images/play.png";
import HTMLFlipBook from "react-pageflip";
export default function Book() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const [value, setValue] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    let h = window.innerHeight;
    setHeight(h);
    let w = window.innerWidth;
    setWidth(w);
  }, []);

  const [next, setNext] = useState(false);
  return (
    <div className={`${styles.container}`}>
      <div style={{ position: "relative", top: 150, zIndex: 2500 }}></div>

      <div className={`${styles.TopRowcontainer}`}>
        <div className={`${styles.row}`}>
          <div className={`${styles.heading}`}>
            Diary of a Wimpy Kid (Book 1)
          </div>
        </div>
      </div>
      <button
        onClick={() => speak({ text: value })}
        className={`${styles.PlayButton}`}
      >
        <img src={Play} className={`${styles.buttonIcon}`} />
      </button>
      <div className={`${styles.closeButton}`}>x</div>

      {/* <div className={`${styles.bookContainer}`}>
        <div className={`${styles.bookCard}`}>
          <div
            className={`${styles.bookCardInner} ${next ? styles.showNext : ""}`}
          >
            <div className={`${styles.page1} ${styles.bookFront}`}>
              <div className={`${styles.paragraph}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div className={`${styles.paragraph}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div className={`${styles.page2} ${styles.bookBack}`}>
              <div className={`${styles.paragraph}`}>
                ipoolilkl,ikl,m,kl,kj,mk,kjl,jkkjkjjmmkm jn nbyh vdtyyul dtrhn
                dfj vhguj bnjhjhjhjprinter took a galley of type and scrambled
                it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
              <div className={`${styles.paragraph}`}>
                jkijjk,j,jl Ipsum is simply dummy text of theolikl, printing and
                typesetting inikdustry. Lorem jmj khkjmn mnkujkmj belien the
                industry's standard dummy text everuik sm,jnm n ince the
                15,j00s, when an unknok,wn print.kj, n nlker took a galley of
                type nmk,iand scrambled it to make a type specimen ̣book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentmj, mn bhtgjially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passajkijlok jkjkmjmkukuk
                ukm jikuhjh
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.bookPrev}`} onClick={() => setNext(!next)}>
          <span>&lt;</span>
        </div>
        <div className={`${styles.bookNext}`} onClick={() => setNext(!next)}>
          <span>&gt;</span>
        </div>
      </div> */}
        <HTMLFlipBook className="flip-book" width={800} height={800}>
          <div className="page">
            <div className="page-content">
              <div className="page-header">Page 1</div>
              <p className="page-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="page">
            <div className="page-content">
              <div className="page-header">Page 2</div>
              <p className="page-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="page">
            <div className="page-content">
              <div className="page-header">Page 3</div>
              <p className="page-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="page">
            <div className="page-content">
              <div className="page-header">Page 4</div>
              <p className="page-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="page">
            <div className="page-content">
              <div className="page-header">Page 5</div>
              <p className="page-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="page">
            <div className="page-content">
              <div className="page-header">Page 6</div>
              <p className="page-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}
