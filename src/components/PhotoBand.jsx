import { useEffect, useRef } from 'react'

const PHOTOS = [
  '/assets/volunteer-delivery.webp',
  '/assets/vehicle-detail.webp',
  '/assets/vehicle-tucson.webp',
  '/assets/photos/485171613_3806785539618606_1453708735327137541_n.webp',
  '/assets/photos/485313561_3805623196401507_4992101737331252625_n.webp',
  '/assets/photos/485660043_3806062386357588_3630686384300364622_n.webp',
  '/assets/photos/485740729_3806062349690925_3532787280383344243_n.webp',
  '/assets/photos/485931287_3806796982950795_7013749804085184215_n.webp',
  '/assets/photos/486112950_3806785969618563_5753906685303026420_n.webp',
  '/assets/photos/486297488_3806785499618610_3392793616913300245_n.webp',
  '/assets/photos/486353366_3810227769274383_6726778531488123397_n.webp',
  '/assets/photos/486513594_3811111699185990_1956501082125596322_n.webp',
  '/assets/photos/487049217_3812490479048112_4884949439703735004_n.webp',
  '/assets/photos/487168749_3817563808540779_8668395688140489628_n.webp',
  '/assets/photos/487311913_3817563508540809_7998143474672516916_n.webp',
  '/assets/photos/487429424_3817972181833275_2556777254680178423_n.webp',
  '/assets/photos/487464203_3817784311852062_6634277974169679217_n.webp',
  '/assets/photos/487481022_3818239915139835_490885718083253522_n.webp',
  '/assets/photos/487481314_3816717471958746_7341273416218813118_n.webp',
  '/assets/photos/487499677_3817563505207476_6930566223407994556_n.webp',
  '/assets/photos/487709693_3817785085185318_2220969660443495122_n.webp',
  '/assets/photos/487934199_3817785121851981_4440264766839709241_n.webp',
  '/assets/photos/487959436_3820308621599631_1590226859196639318_n.webp',
  '/assets/photos/488220222_3816732895290537_6510896844575552034_n.webp',
  '/assets/photos/488683989_3818871071743386_6951839593872114688_n.webp',
  '/assets/photos/495483894_3862112807419212_8624746850536706372_n.webp',
  '/assets/photos/495493200_3861836430780183_2976081696794097012_n.webp',
  '/assets/photos/495542491_3861961504101009_8203609097044335931_n.webp',
  '/assets/photos/495565865_3861965970767229_6600344356187495280_n.webp',
  '/assets/photos/495569831_3861961620767664_6080293125700065509_n.webp',
  '/assets/photos/495570722_3861961904100969_6514537463008132639_n.webp',
  '/assets/photos/495570997_3861976434099516_2817045002711802766_n.webp',
  '/assets/photos/495572035_3861961630767663_3214088397458370751_n.webp',
  '/assets/photos/495575056_3861962997434193_5114732568311898938_n.webp',
  '/assets/photos/495580992_3861961494101010_3886254072935049400_n.webp',
  '/assets/photos/495698892_3861836414113518_794726743087563838_n.webp',
  '/assets/photos/496707816_3861836667446826_2194480503194060576_n.webp',
  '/assets/photos/IMG_8831.webp',
  '/assets/photos/IMG_8841.webp',
  '/assets/photos/IMG_8843.webp',
  '/assets/photos/IMG_8847.webp',
  '/assets/photos/IMG_8855.webp',
  '/assets/photos/photo_2022-09-15_09-49-57.webp',
  '/assets/photos/photo_2022-09-15_09-49-58.webp',
  '/assets/photos/МПДК20.webp',
]

export default function PhotoBand() {
  const trackRef = useRef(null)
  const animRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // IntersectionObserver — play when visible, pause when not
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (animRef.current) animRef.current.play()
        } else {
          if (animRef.current) animRef.current.pause()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(track.parentElement)

    // Wait for images to paint, then measure real width
    const start = () => {
      const halfW = track.scrollWidth / 2
      animRef.current = track.animate(
        [{ transform: 'translateX(0)' }, { transform: `translateX(-${halfW}px)` }],
        { duration: halfW * 18, iterations: Infinity, easing: 'linear' }
      )
    }

    // Small delay so images start loading
    const t = setTimeout(start, 100)

    const pause = () => { if (animRef.current) animRef.current.pause(); pausedRef.current = true }
    const resume = () => { if (animRef.current) animRef.current.play(); pausedRef.current = false }
    track.parentElement.addEventListener('mouseenter', pause)
    track.parentElement.addEventListener('mouseleave', resume)

    return () => {
      clearTimeout(t)
      observer.disconnect()
      track.parentElement?.removeEventListener('mouseenter', pause)
      track.parentElement?.removeEventListener('mouseleave', resume)
      if (animRef.current) animRef.current.cancel()
    }
  }, [])

  // Duplicate photos for seamless loop
  const all = [...PHOTOS, ...PHOTOS]

  return (
    <div className="photo-band-wrap">
      <div className="photo-band-track" ref={trackRef}>
        {all.map((src, i) => (
          <img key={i} className="photo-band-img" src={src} alt="" loading="lazy" />
        ))}
      </div>
    </div>
  )
}
