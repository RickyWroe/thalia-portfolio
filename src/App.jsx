import { useEffect, useMemo, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'

const thalia = {
  name: 'Thalia Venous',
  email: 'thalia.venous@gmail.com',
  profilePhoto:
    'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/Facetune_05-07-2023-16-02-06.jpg?v=1770522502',
  winnerVideos: [
    'https://cdn.shopify.com/videos/c/o/v/c354bacc3be54f3fa98948ff8ffda56a.mp4',
    'https://cdn.shopify.com/videos/c/o/v/5a3cfcf8ecc9486daa427c422c12ff65.mp4',
    'https://cdn.shopify.com/videos/c/o/v/85d46d46469c46279e14f452f981af5f.mp4'
  ],
  evergreen: {
    embedUrl: 'https://www.instagram.com/reel/DNIZKu_u7gb/embed'
  },
  tiktokProjects: [
    {
      brand: 'Bad Bunny Merch',
      title: 'Organic Contest Example 01',
      url: 'https://www.tiktok.com/t/ZTh5EeGvK/'
    },
    {
      brand: 'Bad Bunny Merch',
      title: 'Organic Contest Example 02',
      url: 'https://www.tiktok.com/t/ZTh5EY8Mb/'
    },
    {
      brand: 'Skims',
      title: 'Organic Contest Example',
      url: 'https://www.tiktok.com/t/ZTh5ELYap/'
    },
    {
      brand: 'Pandora',
      title: 'Organic Contest Example',
      url: 'https://www.tiktok.com/t/ZTh5EUtWF/'
    }
  ]
}

const stats = [
  { value: 2, prefix: '$', suffix: 'M+', label: 'Organic reach' },
  { value: 5, prefix: '', suffix: 'X', label: 'ROAS campaigns' },
  { value: 100, prefix: '$', suffix: 'K/mo', label: 'Evergreen spend' },
  { value: 6, prefix: '', suffix: '+ years', label: 'Hands-on experience' }
]

function loadScriptOnce(src, id) {
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(id)
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve()
        return
      }
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), {
        once: true
      })
      return
    }

    const script = document.createElement('script')
    script.id = id
    script.src = src
    script.async = true
    script.onload = () => {
      script.dataset.loaded = 'true'
      resolve()
    }
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(script)
  })
}

function StatCounter({ stat }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (!inView) {
      return undefined
    }

    const controls = animate(motionValue, stat.value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1]
    })

    return () => controls.stop()
  }, [inView, motionValue, stat.value])

  return (
    <a href="#" onClick={(e) => e.preventDefault()}>
      <h3>
        {stat.prefix}
        <motion.span>{rounded}</motion.span>
        {stat.suffix}
      </h3>
      <p>{stat.label}</p>
    </a>
  )
}

export default function App() {
  const proposalDate = useMemo(() => new Date().toISOString().slice(0, 10), [])
  const mailtoLink = useMemo(() => {
    const subject = `UGC - Proposal - ${proposalDate}`
    return `mailto:${thalia.email}?subject=${encodeURIComponent(subject)}`
  }, [proposalDate])

  useEffect(() => {
    let mounted = true

    const bootstrapReferenceRuntime = async () => {
      await loadScriptOnce('/reference/vendor/jquery.min.js', 'reference-jquery')
      await loadScriptOnce('/reference/vendor/hammer.min.js', 'reference-hammer')
      await loadScriptOnce('/reference/vendor/gsap.min.js', 'reference-gsap')
      await loadScriptOnce('/reference/vendor/p5.min.js', 'reference-p5')
      await loadScriptOnce('/reference/vendor/vanta.topology.min.js', 'reference-vanta')
      await loadScriptOnce('/reference/function.js', 'reference-function-js')
      await loadScriptOnce('https://www.tiktok.com/embed.js', 'reference-tiktok-embed')

      if (!mounted) {
        return
      }

      const isMobile = window.innerWidth <= 768

      if (window.__thaliaVantaInstance?.destroy) {
        window.__thaliaVantaInstance.destroy()
      }

      if (window.VANTA?.TOPOLOGY) {
        window.__thaliaVantaInstance = window.VANTA.TOPOLOGY({
          el: '#perspective',
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 0.8,
          scaleMobile: 0.8,
          maxDistance: 15,
          spacing: 25,
          fpsLimit: isMobile ? 30 : 60,
          backgroundColor: 0x4931d5,
          color: 0x6d5ce1,
          lineColor: 0xffffff
        })
      }

      window.topologyLoaded = false
      setTimeout(() => {
        window.topologyLoaded = true
      }, 500)

      if (window.tiktokEmbedLoad) {
        window.tiktokEmbedLoad()
      }
    }

    bootstrapReferenceRuntime().catch((error) => {
      console.error('Reference runtime failed to load:', error)
    })

    return () => {
      mounted = false
      if (window.__thaliaVantaInstance?.destroy) {
        window.__thaliaVantaInstance.destroy()
        window.__thaliaVantaInstance = null
      }
    }
  }, [])

  return (
    <>
      <div className="capybaraloader hidden" id="capybara-loader">
        <div className="capybara-container">
          <div className="capybara">
            <div className="capyhead">
              <div className="capyear">
                <div className="capyear2" />
              </div>
              <div className="capyear" />
              <div className="capymouth">
                <div className="capylips" />
                <div className="capylips" />
              </div>
              <div className="capyeye" />
              <div className="capyeye" />
            </div>
            <div className="capyleg" />
            <div className="capyleg2" />
            <div className="capyleg2" />
            <div className="capy" />
          </div>
          <div className="loader">
            <div className="loaderline" />
          </div>
        </div>
      </div>

      <div id="stairs-transition" className="stairs-container hidden">
        <div className="stair" style={{ '--delay': 0 }} />
        <div className="stair" style={{ '--delay': 1 }} />
        <div className="stair" style={{ '--delay': 2 }} />
        <div className="stair" style={{ '--delay': 3 }} />
        <div className="stair" style={{ '--delay': 4 }} />
        <div className="stair" style={{ '--delay': 5 }} />
      </div>

      <div className="perspective effect-rotate-left" id="perspective">
        <div className="containerr">
          <div className="outer-nav--return" />

          <div id="viewport" className="l-viewport">
            <div className="l-wrapper">
              <header className="header">
                <a className="header--logo" href="#" aria-label="Thalia Venous home" />
                <a className="header--cta cta" href={mailtoLink}>
                  <span>Hire me</span>
                </a>
                <div className="header--nav-toggle">
                  <span />
                </div>
              </header>

              <nav className="l-side-nav" aria-label="Section navigation">
                <ul className="side-nav">
                  <li className="is-active">
                    <span>Home</span>
                  </li>
                  <li>
                    <span>Projects</span>
                  </li>
                  <li>
                    <span>About</span>
                  </li>
                  <li>
                    <span>Contact</span>
                  </li>
                  <li>
                    <span>Hire me</span>
                  </li>
                </ul>
              </nav>

              <ul className="l-main-content main-content">
                <li id="home" className="l-section section section--is-active">
                  <div className="intro">
                    <div className="intro--banner">
                      <h1>
                        Performance UGC that turns <br />
                        views into scalable revenue <br />
                        <span id="one-animation" data-shadow="Thalia">
                          Thalia
                        </span>{' '}
                        <span id="two-animation" data-shadow="Venous">
                          Venous
                        </span>
                        <span className="hi">.</span>
                      </h1>

                      <a href={mailtoLink} className="cta">
                        Hire me
                        <span className="btn-background" />
                      </a>

                      <div className="photo-frame-container">
                        <div className="photo-frame pixelated-image-card">
                          <div className="pixelated-image-card__default">
                            <img src={thalia.profilePhoto} alt={thalia.name} className="profile-photo" />
                          </div>
                          <div className="pixelated-image-card__active">
                            <video autoPlay muted loop playsInline>
                              <source src={thalia.winnerVideos[0]} type="video/mp4" />
                            </video>
                          </div>
                          <div className="pixelated-image-card__pixels" />
                        </div>
                      </div>
                    </div>

                    <div className="intro--options">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <h3>RESULTS</h3>
                        <p>$2M+ organic reach and recurring 4-5X ROAS performance across campaigns.</p>
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <h3>EVERGREEN</h3>
                        <p>One evergreen ad framework scaled to $100K/month with 4.5 ROAS stability.</p>
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <h3>EXPERTISE</h3>
                        <p>6+ years across DTC, paid social, marketplaces, and lifecycle marketing.</p>
                      </a>
                    </div>
                  </div>
                </li>

                <li className="l-section section" id="projects">
                  <div className="work">
                    <h2>Selected Projects</h2>
                    <div className="work--lockup">
                      <ul className="slider">
                        <li className="slider--item slider--item-left">
                          <div className="project-card">
                            <div className="project-frame">
                              <div className="frame-border">
                                <video className="project-image" autoPlay muted loop playsInline preload="metadata">
                                  <source src={thalia.winnerVideos[0]} type="video/mp4" />
                                </video>
                                <div className="tech-buttons">
                                  <span className="tech-btn">Winner 01</span>
                                  <span className="tech-btn">5X ROAS</span>
                                </div>
                              </div>
                            </div>
                            <div className="project-info">
                              <h3 className="project-title">UGC Winner 01</h3>
                              <p className="project-description">Performance winner scaled in paid social loops.</p>
                            </div>
                          </div>
                        </li>

                        <li className="slider--item slider--item-center">
                          <div className="project-card">
                            <div className="project-frame">
                              <div className="frame-border">
                                <video className="project-image" autoPlay muted loop playsInline preload="metadata">
                                  <source src={thalia.winnerVideos[1]} type="video/mp4" />
                                </video>
                                <div className="tech-buttons">
                                  <span className="tech-btn">Winner 02</span>
                                  <span className="tech-btn">4-5X ROAS</span>
                                </div>
                              </div>
                            </div>
                            <div className="project-info">
                              <h3 className="project-title">UGC Winner 02</h3>
                              <p className="project-description">Hook-first creative designed for conversion velocity.</p>
                            </div>
                          </div>
                        </li>

                        <li className="slider--item slider--item-right">
                          <div className="project-card">
                            <div className="project-frame">
                              <div className="frame-border">
                                <video className="project-image" autoPlay muted loop playsInline preload="metadata">
                                  <source src={thalia.winnerVideos[2]} type="video/mp4" />
                                </video>
                                <div className="tech-buttons">
                                  <span className="tech-btn">Winner 03</span>
                                  <span className="tech-btn">4-5X ROAS</span>
                                </div>
                              </div>
                            </div>
                            <div className="project-info">
                              <h3 className="project-title">UGC Winner 03</h3>
                              <p className="project-description">Creative system tuned for repeatable ad account lift.</p>
                            </div>
                          </div>
                        </li>

                        <li className="slider--item">
                          <div className="project-card">
                            <div className="project-frame">
                              <div className="frame-border">
                                <iframe
                                  title="Featured Evergreen Ad"
                                  className="project-image instagram-frame"
                                  src={thalia.evergreen.embedUrl}
                                  loading="lazy"
                                />
                                <div className="tech-buttons">
                                  <span className="tech-btn">100K/mo Spend</span>
                                  <span className="tech-btn">4.5 ROAS</span>
                                </div>
                              </div>
                            </div>
                            <div className="project-info">
                              <h3 className="project-title">Featured Evergreen Ad</h3>
                              <p className="project-description">Sustained evergreen performer with stable return.</p>
                            </div>
                          </div>
                        </li>

                        {thalia.tiktokProjects.map((item) => (
                          <li key={item.url} className="slider--item">
                            <div className="project-card">
                              <div className="project-frame">
                                <div className="frame-border tiktok-frame-wrap">
                                  <blockquote className="tiktok-embed" cite={item.url}>
                                    <section>
                                      <a href={item.url} target="_blank" rel="noreferrer">
                                        Watch on TikTok
                                      </a>
                                    </section>
                                  </blockquote>
                                </div>
                              </div>
                              <div className="project-info">
                                <h3 className="project-title">
                                  {item.brand} - {item.title}
                                </h3>
                                <div className="project-buttons">
                                  <a href={item.url} target="_blank" rel="noreferrer" className="btn-preview">
                                    <span>Open in TikTok</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="slider--prev">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <div className="slider--next">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="l-section section" id="about">
                  <div className="about">
                    <div className="about--banner">
                      <h2>
                        Strategic<br />performance<br />with creator<br />
                        <span className="dot" id="one-animation" data-shadow="discipline">
                          discipline
                        </span>
                        <span className="hi">.</span>
                      </h2>
                      <a href={mailtoLink} className="carrer">
                        Hire me
                        <span>
                          <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 150 118"
                            xmlSpace="preserve"
                          >
                            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                              <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                            </g>
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="about--options">
                      {stats.map((stat) => (
                        <StatCounter key={stat.label} stat={stat} />
                      ))}
                    </div>
                  </div>
                </li>

                <li className="l-section section" id="contact">
                  <div className="contact">
                    <div className="contact--lockup">
                      <div className="text">
                        <h2>
                          <span id="one-animation" data-shadow="Let's">
                            Let's
                          </span>{' '}
                          build growth <span className="dot">together</span>
                          <span className="hi">.</span>
                        </h2>
                        <a href={mailtoLink} className="resume">
                          Hire me
                          <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 150 118"
                            xmlSpace="preserve"
                          >
                            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                              <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div className="parent">
                        <div className="card">
                          <div className="content-box">
                            <span className="card-title">Channels</span>
                            <a
                              href="https://www.instagram.com/reel/DNIZKu_u7gb/"
                              target="_blank"
                              rel="noreferrer"
                              className="see-more"
                            >
                              Instagram Reel
                            </a>
                            {thalia.tiktokProjects.map((item) => (
                              <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="see-more">
                                {item.brand}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="l-section section" id="hire">
                  <div className="hire">
                    <h2>You want me to do</h2>
                    <form className="work-request" action="https://formspree.io/f/mpwdzzry" method="POST">
                      <fieldset className="work-request--options-fieldset">
                        <legend className="sr-only">Select at least one service you need</legend>
                        <div className="work-request--options" role="group" aria-labelledby="services-label">
                          <span id="services-label" className="sr-only">
                            Services
                          </span>

                          <span className="options-a">
                            <input id="opt-1" type="checkbox" name="services[]" value="UGC Ads" />
                            <label htmlFor="opt-1">UGC Ads</label>

                            <input id="opt-2" type="checkbox" name="services[]" value="Paid Social Creative" />
                            <label htmlFor="opt-2">Paid Social Creative</label>

                            <input id="opt-3" type="checkbox" name="services[]" value="Marketplace Creative" />
                            <label htmlFor="opt-3">Marketplace Creative</label>
                          </span>

                          <span className="options-b">
                            <input id="opt-4" type="checkbox" name="services[]" value="Landing Page UGC" />
                            <label htmlFor="opt-4">Landing Page UGC</label>

                            <input id="opt-5" type="checkbox" name="services[]" value="Creative Strategy Sprint" />
                            <label htmlFor="opt-5">Creative Strategy Sprint</label>

                            <input id="opt-6" type="checkbox" name="services[]" value="Evergreen Ad Systems" />
                            <label htmlFor="opt-6">Evergreen Ad Systems</label>
                          </span>
                        </div>
                        <div id="services-error" className="work-request--error" role="alert" aria-live="polite" />
                      </fieldset>

                      <div className="work-request--information">
                        <div className="information-name">
                          <input id="name" type="text" name="name" spellCheck="false" required />
                          <label htmlFor="name">Name</label>
                        </div>
                        <div className="information-email">
                          <input id="email" type="email" name="_replyto" spellCheck="false" required />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>

                      <input type="submit" id="submit-btn" value="Send Request" />
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul className="outer-nav">
          <li className="is-active">Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
          <li>Hire me</li>
        </ul>
      </div>

      <div className="circular-text-container">
        <div className="circular-text">
          <svg viewBox="0 0 100 100">
            <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            <text>
              <textPath href="#circle">PERFORMANCE UGC THALIA VENOUS</textPath>
            </text>
          </svg>
        </div>
        <div className="circular-text circular-text-2">
          <svg viewBox="0 0 100 100">
            <path id="circle2" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            <text>
              <textPath href="#circle2">THALIA VENOUS PERFORMANCE UGC</textPath>
            </text>
          </svg>
        </div>
      </div>
    </>
  )
}
