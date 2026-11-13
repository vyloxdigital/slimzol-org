Slimzol — image assets
slimzol-org.vercel.app

Drop these nine files into this folder, keeping the names exactly as
written. The page references them by these names and nothing else.
No other image files are used anywhere on the site.

  slimzol-hero.webp                 1000 x 1000  HERO, square. This is the LCP
                                                 image and the only preloaded
                                                 one, so keep it under ~120 KB.
                                                 It is also the og:image used
                                                 when the page is shared.
  slimzol-3-bottles-guarantee.webp   200 x 170   three-bottle pack card
  slimzol-2-bottles-guarantee.webp   200 x 170   two-bottle pack card
  slimzol-6-bottles-guarantee.webp   200 x 170   six-bottle pack card
  slimzol-review-1.webp              400 x 300   reviews section
  slimzol-review-2.webp              400 x 300   reviews section
  slimzol-review-3.webp              400 x 300   reviews section
  slimzol-guarantee.webp             300 x 300   60-day guarantee seal
  favicon.png                        512 x 512   tab icon and web app icon

Notes

* The width and height attributes in index.html match the figures above.
  If you ship an image with a different aspect ratio, update those two
  attributes to match or Cumulative Layout Shift will rise from zero.
  slimzol-hero.webp is set to 1000 x 1000, a square, which matches the
  banner artwork currently in use. Only the RATIO has to match, not the
  exact pixels, so a 1200 x 1200 or 900 x 900 file needs no change. A
  non-square hero does: update width and height on that <img>.
* Serve real WebP, not a renamed PNG or JPEG.
* The pack images and the guarantee seal sit on white tiles, so a white
  or transparent background for those looks correct in place.
* The hero works best with a transparent or soft background, because it
  runs off the left edge of the viewport on wide screens.
* Only slimzol-hero.webp is preloaded. Every other image is lazy loaded,
  which is why the page scores as it does; do not add more preloads.
