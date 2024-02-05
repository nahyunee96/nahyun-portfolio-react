import type { NextPage } from 'next'
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // const [isReady, setIsReady] = useState<boolean>(false);
  // useEffect(() => {
  //   setIsReady(true);
  // }, []);

  const portfolios = useMemo(() => [
    {
      name: 'HiveMedia',
      src: 'http://13.125.72.223/'
    },
    {
      name: 'Event World',
      src: 'https://eventworld.kr/'
    },
    {
      name: 'One Meditech',
      src: 'https://portfolio.nhkim96.com/onemeditech'
    },
    {
      name: 'Red Gingseng Egg',
      src: 'https://portfolio.nhkim96.com/hongsam'
    },
    //{
      //name: 'Le10 By Trimage',
      //src: 'https://portfolio.nhkim96.com/le10bytrimage'
    //},
    //{
      //name: 'AMADEN',
      //src: 'https://portfolio.nhkim96.com/amaden'
    //},
    //{
      //name: 'LAKMON',
      //src: 'https://portfolio.nhkim96.com/dongtanlakmon'
    //},
    //{
      //name: 'ELSIGNATURE',
      //src: 'https://portfolio.nhkim96.com/elsignature'
    //},
    //{
      //name: 'Ocean First',
      //src: 'https://portfolio.nhkim96.com/meonggiocf'
    //},
    //{
      //name: 'G Well Estate',
      //src: 'https://portfolio.nhkim96.com/gwellestate'
    //},
    {
      name: 'Hillstate Adview',
      src: 'https://portfolio.nhkim96.com/hillstate_sunhwathewise/adview.php'
    },
    // {
    //   name: 'Ulleng',
    //   src: '//portfolio.nhkim96.com/ulleng'
    // },
    {
      name: 'TiGroup',
      src: 'https://portfolio.nhkim96.com/tigroup'
    }
    // {
    //   name: 'TwentyFirst',
    //   src: '//portfolio.nhkim96.com/twentyfirst'
    // },
    // {
    //   name: 'Us_Maska',
    //   src: '//portfolio.nhkim96.com/us_maska'
    // }
  ], []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const vh = window.innerHeight; 
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    
      window.onresize = () => {
        const vh = window.innerHeight; 
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
    };

    //menu
    const resizeHandler = (): void => {
      let transitionBackground = document.getElementById('bg_layer') as HTMLElement;

      let frameProportion = 1.78,
          frames = 25,
          resize = false;

      setLayerDimensions();

      if (!resize) {
        resize = true;
        (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
      };

      function setLayerDimensions() {
        let windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,
            layerHeight, layerWidth;
        
        if (windowWidth/windowHeight > frameProportion) {
          layerWidth = windowWidth;
          layerHeight = layerWidth/frameProportion;
        } else {
          layerHeight = windowHeight*1.2;
          layerWidth = layerHeight*frameProportion;
        }

        transitionBackground.style.width = layerWidth*frames+'px';
        transitionBackground.style.height = layerHeight+'px';

        resize = false;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    };
  }, []);

  const moveTo = (sectionNum: number): void => {
    //menu move
    const sectionElem = document.getElementById(`sMove${sectionNum}`) as HTMLElement;
    const sectionOffset = sectionElem.offsetTop;

    window.scrollTo({ top: sectionOffset, behavior: 'smooth' });
  };

  const clickMenu = (): void => {
    const menuBtn = document.getElementById('menuBtn') as HTMLElement;
    const transitionLayer = document.getElementById('transition_layer') as HTMLElement;
    const aside = document.getElementById('aside') as HTMLElement;

    if (!menuOpen) {
      aside.classList.remove(styles.close);
      aside.classList.add(styles.open);
      setTimeout(()=>{
        transitionLayer.classList.remove(styles.closing);
        menuBtn.classList.add(styles.open);
        transitionLayer.classList.add(styles.visible);
        transitionLayer.classList.add(styles.opening);
      }, 200);
      setMenuOpen(true);

    } else {
      aside.classList.remove(styles.open);
      aside.classList.add(styles.close);
      setTimeout(()=>{
        menuBtn.classList.remove(styles.open);
        transitionLayer.classList.add(styles.closing);
      }, 200);
      setMenuOpen(false);
    };
  };

  return (
    <div className={styles.container}>
      <header className={`${styles.header} header`}>
        <div className={styles.row}>
          <button className={styles.menuBtn} id="menuBtn" onClick={clickMenu}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </button>
        </div>
      </header>
      <aside className={styles.aside} id="aside">
        <ul className={styles.inner} id="asideInner">
          <li onClick={() => moveTo(1)}>I&rsquo;m NAHYUN</li>
          <li onClick={() => moveTo(2)}>Intro</li>
          <li onClick={() => moveTo(3)}>Portfolio</li>
          <li onClick={() => moveTo(4)}>Contact</li>
        </ul>
        <div className={styles.transition_layer} id="transition_layer">
          <div className={styles.bg_layer} id="bg_layer"></div>
        </div>
      </aside>
      <section className={styles.mainCg} id="sMove1">
        <h1 className={styles.title}>
          <div className={styles.night}>
            {
              Array(20).fill(0).map((_: number, i: number) => (
                <div className={styles.shooting_star} key={i}></div>
              ))
            }
          </div>
          <p>
            <span>I&rsquo;m</span>
          </p>
          <p><span>NAHYUN<em>!</em></span></p>
        </h1>
      </section>
      <section className={styles.intro} id="sMove2">
        <div className={styles.inner}>
          <div className={styles.imageLayout}>
            <span className={styles.image}></span>
          </div>
          <div className={styles.introText}>
            <h2>Hello! my name is nahyun-kim.</h2>
            <p>
              안녕하세요. 저는 &lsquo;김나현&rsquo; 이라고 합니다 ! <br />
              저의 사이트에 오신 것을 환영합니다 !<br className={styles.br__} />
              <br className={styles.br__}/>
              저는 2017년부터 &lsquo;웹 퍼블리셔&rsquo; 로서 일해온 경력이 있고, <br />
              2022년부터 현재까지 프론트엔드의 길을 걷기위해, <br />
              필요한 기술들을 공부하는 중입니다.<br className={styles.br__} />
              <br className={styles.br__} />
              작업에 있어서는 완벽주의가 있어, 오래 걸리는 경우들이 있지만 <br />
              그만큼 기술을 빨리 터득하는 편입니다 ! <br />
              부족할 수는 있지만, 제 자신에게 부끄럽지는 않게 <br />
              작업하고, 노력하고 있습니다.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.portfolio} id="sMove3">
        <div className={styles.tabTopWrap}>
          <div className={styles.tabTop}>
            <div className={styles.con}></div>
            <span>PORTFOLIO</span>
          </div>
        </div>
        <div className={styles.fileTop}></div>
        <div className={styles.row}>
          <div className={styles.inner}>
            <ul className={styles.stackWrap}>
              {
                portfolios.map((item: { name: string; src: string; }, i: number) => (
                  <li className={styles.stackBox} key={`li-${i}`}>
                    <a href={item.src} target="_blank" rel="noreferrer" className={styles.stack}>
                      <span >
                        <div className={styles.stack__deco}></div>
                        <div className={styles.stack__deco}></div>
                        <div className={styles.stack__deco}></div>
                        <div className={styles.stack__deco}></div>
                        <div className={styles.stack__figure}>{item.name}</div>
                      </span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.contact} id="sMove4">
        <div className={styles.inner}>
          <div className={styles.contactText}>
            <h3>
              저와 컨택을 하고 싶으시다면 !
            </h3>
            <ul className={styles.info}>
              <li>
                <label htmlFor="TEL.">TEl.</label> 
                <span>010-5736-2172</span>
              </li>
              <li>
                <label htmlFor="EMAIL.">EMAIL.</label> 
                <span>unique5264@naver.com /<br /> unique950318@gmail.com</span>
              </li>
              {/* <li>
                <label htmlFor="INSTAGRAM.">INSTAGRAM.</label> 
                <span>@naa_hyuun_job</span>
              </li> */}
            </ul>
          </div>
          <div className={styles.image}></div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p> Copyright 2023. Nahyun-Kim all rights reserved.</p>
      </footer>
    </div>

    
  )
}

export default Home
