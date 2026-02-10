import { useEffect, useMemo, useState } from 'react'

const thalia = {
  name: 'Thalia Venous',
  email: 'thalia.venous@gmail.com',
  profilePhoto:
    'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/Facetune_05-07-2023-16-02-06.jpg?v=1770522502',
  winnerVideos: [
    {
      id: 'paid-01',
      title: 'Evergreen Ad 01',
      description: 'Aromely evergreen paid winner',
      video: 'https://cdn.shopify.com/videos/c/o/v/3b7ad7ab9843434f870093aaba59e5c1.mp4',
      result: '2M impressions · 4X ROAS · $150K spend',
      logo: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/1_63049b3c-6b51-4208-bed9-6b6b7dd0f566.png?v=1770698238'
    },
    {
      id: 'paid-02',
      title: 'Winner 02',
      description: 'Aromely paid winner',
      video: 'https://cdn.shopify.com/videos/c/o/v/85d46d46469c46279e14f452f981af5f.mp4',
      result: '5X ROAS',
      logo: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/1_63049b3c-6b51-4208-bed9-6b6b7dd0f566.png?v=1770698238'
    },
    {
      id: 'paid-03',
      title: 'Winner 03',
      description: 'Aromely paid winner',
      video: 'https://cdn.shopify.com/videos/c/o/v/5a3cfcf8ecc9486daa427c422c12ff65.mp4',
      result: '4X ROAS',
      logo: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/1_63049b3c-6b51-4208-bed9-6b6b7dd0f566.png?v=1770698238'
    },
    {
      id: 'paid-04',
      title: 'Winner 04',
      description: 'Aromely paid winner',
      video: 'https://cdn.shopify.com/videos/c/o/v/c354bacc3be54f3fa98948ff8ffda56a.mp4',
      result: '6X ROAS',
      logo: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/1_63049b3c-6b51-4208-bed9-6b6b7dd0f566.png?v=1770698238'
    },
    {
      id: 'org-01',
      title: 'Bad Bunny Merch',
      description: 'Organic result',
      video: 'https://cdn.shopify.com/videos/c/o/v/08913302125e45a7b986ccdda12379ed.mp4',
      result: '60K views organic',
      logo: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/3_56e818d1-2b72-4da7-80e0-b44388955429.png?v=1770698238'
    },
    {
      id: 'org-02',
      title: 'Skims',
      description: 'Organic result',
      video: 'https://cdn.shopify.com/videos/c/o/v/f1b65a3fa8ec4f8eb3e23be6a0e78824.mp4',
      result: '70% retention rate',
      logo: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/2_6f5f9207-9006-40e6-b0d4-d4791e856ab4.png?v=1770698238'
    },
    {
      id: 'org-03',
      title: 'Bad Bunny Merch 02',
      description: 'Organic result',
      video: 'https://cdn.shopify.com/videos/c/o/v/4b6701cd8f3b49d3a6c24ba3752f1453.mp4',
      result: '300K views organic',
      logo: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/3_56e818d1-2b72-4da7-80e0-b44388955429.png?v=1770698238'
    },
    {
      id: 'org-04',
      title: 'Pandora',
      description: 'Organic result',
      video: 'https://cdn.shopify.com/videos/c/o/v/8e5ca2bafa8d4a7b89acf545751214fb.mp4',
      result: '80% engagement rate',
      logo: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/4_e828e394-704a-45cc-8230-9e19566ce9ca.png?v=1770698238'
    }
  ],
  evergreen: {
    embedUrl: 'https://www.instagram.com/reel/DNIZKu_u7gb/embed'
  },
  tiktokProjects: [
    { brand: 'Bad Bunny Merch', title: 'Organic result · 60K views', url: 'https://cdn.shopify.com/videos/c/o/v/08913302125e45a7b986ccdda12379ed.mp4' },
    { brand: 'Skims', title: 'Organic result · 70% retention rate', url: 'https://cdn.shopify.com/videos/c/o/v/f1b65a3fa8ec4f8eb3e23be6a0e78824.mp4' },
    { brand: 'Bad Bunny Merch 02', title: 'Organic result · 300K views', url: 'https://cdn.shopify.com/videos/c/o/v/4b6701cd8f3b49d3a6c24ba3752f1453.mp4' },
    { brand: 'Pandora', title: 'Organic result · 80% engagement rate', url: 'https://cdn.shopify.com/videos/c/o/v/8e5ca2bafa8d4a7b89acf545751214fb.mp4' }
  ],
  brandLogos: [
    { name: 'Aromely', src: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/1_63049b3c-6b51-4208-bed9-6b6b7dd0f566.png?v=1770698238' },
    { name: 'Skims', src: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/2_6f5f9207-9006-40e6-b0d4-d4791e856ab4.png?v=1770698238' },
    { name: 'Bad Bunny', src: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/3_56e818d1-2b72-4da7-80e0-b44388955429.png?v=1770698238' },
    { name: 'Pandora', src: 'https://cdn.shopify.com/s/files/1/0862/9157/9177/files/4_e828e394-704a-45cc-8230-9e19566ce9ca.png?v=1770698238' }
  ]
}

const stats = [
  { value: '$2M+', label: 'Organic reach' },
  { value: '4-5X', label: 'ROAS campaigns' },
  { value: '$100K/MONTH', label: 'Evergreen ad spend' },
  { value: '6+ YEARS', label: 'Hands-on experience' }
]

const services = [
  'UGC Ads',
  'Paid Social Creative',
  'Marketplace Creative',
  'Landing Page UGC',
  'Creative Strategy Sprint',
  'Evergreen Ad Systems'
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
    script.async = false
    script.onload = () => {
      script.dataset.loaded = 'true'
      resolve()
    }
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(script)
  })
}

export default function App() {
  const proposalDate = useMemo(() => new Date().toISOString().slice(0, 10), [])
  const [activeSlide, setActiveSlide] = useState(0)
  const projectSlides = useMemo(() => thalia.winnerVideos, [])
  const totalSlides = projectSlides.length
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % totalSlides)
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
      await loadScriptOnce('/reference/function.js', 'reference-function-js')

      if (!mounted) {
        return
      }

      const isMobile = window.innerWidth <= 768
      const lowPowerMode =
        isMobile || window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (window.__thaliaVantaInstance?.destroy) {
        window.__thaliaVantaInstance.destroy()
      }

      if (!lowPowerMode) {
        await loadScriptOnce('/reference/vendor/p5.min.js', 'reference-p5')
        await loadScriptOnce('/reference/vendor/vanta.topology.min.js', 'reference-vanta')

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
      }

      window.topologyLoaded = false
      setTimeout(() => {
        window.topologyLoaded = true
      }, 500)

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

  useEffect(() => {
    const videos = document.querySelectorAll('.ugc-carousel-video')
    videos.forEach((video) => {
      const card = video.closest('.ugc-carousel-card')
      const isCenter = card?.classList.contains('is-center')
      if (isCenter) {
        video.play().catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [activeSlide])

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
                              <source src={thalia.winnerVideos[0].video} type="video/mp4" />
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
                    <div className="hero-logos-row" aria-label="Brands worked with">
                      {thalia.brandLogos.map((logo) => (
                        <div key={logo.name} className="brand-logo-chip">
                          <img
                            src={logo.src}
                            alt={`${logo.name} logo`}
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              const fallback = e.currentTarget.parentElement?.querySelector('.brand-fallback')
                              if (fallback) {
                                fallback.textContent = logo.name
                                fallback.style.display = 'block'
                              }
                            }}
                          />
                          <span className="brand-fallback">{logo.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="l-section section" id="projects">
                  <div className="work">
                    <h2>Selected Projects</h2>
                    <div className="ugc-carousel-wrap">
                      <button className="ugc-carousel-nav prev" onClick={prevSlide} aria-label="Previous project">
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
                      </button>
                      <div className="ugc-carousel-track">
                        {[-1, 0, 1].map((offset) => {
                          const index = (activeSlide + offset + totalSlides) % totalSlides
                          const slide = projectSlides[index]
                          const posClass = offset === 0 ? 'is-center' : offset < 0 ? 'is-left' : 'is-right'
                          return (
                            <article key={`${slide.id}-${offset}`} className={`ugc-carousel-card ${posClass}`}>
                              <div className="ugc-video-frame">
                                <video
                                  className="ugc-carousel-video"
                                  muted
                                  loop
                                  playsInline
                                  preload={offset === 0 ? 'auto' : 'metadata'}
                                >
                                  <source src={slide.video} type="video/mp4" />
                                </video>
                                <div className="carousel-overlay">
                                  <img src={slide.logo} alt={`${slide.title} logo`} loading="lazy" />
                                  <div>
                                    <h3 className="project-title">{slide.title}</h3>
                                    <strong>{slide.result}</strong>
                                  </div>
                                </div>
                              </div>
                            </article>
                          )
                        })}
                      </div>
                      <button className="ugc-carousel-nav next" onClick={nextSlide} aria-label="Next project">
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
                      </button>
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
                        <a key={stat.label} href="#" onClick={(e) => e.preventDefault()}>
                          <h3>{stat.value}</h3>
                          <p>{stat.label}</p>
                        </a>
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
                        <form className="contact-services-form" action="https://formspree.io/f/mpwdzzry" method="POST">
                          <label htmlFor="service-selector">Select service</label>
                          <select id="service-selector" name="service" defaultValue={services[0]} required>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                          <input type="hidden" name="_subject" value={`UGC - Proposal - ${proposalDate}`} />
                        </form>
                      </div>
                      <div className="parent">
                        <div className="card">
                          <div className="content-box">
                            <span className="card-title">Winner Projects</span>
                            <a
                              href={thalia.evergreen.embedUrl.replace('/embed', '/')}
                              target="_blank"
                              rel="noreferrer"
                              className="see-more"
                            >
                              Evergreen UGC ad - $100K/month @ 4.5 ROAS
                            </a>
                            {thalia.tiktokProjects.map((item) => (
                              <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="see-more">
                                {item.brand} - {item.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
