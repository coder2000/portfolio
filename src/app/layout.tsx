import type { Metadata } from "next";
import { Archivo, Geist, IBM_Plex_Mono } from "next/font/google";
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  canonical,
} from "@/data/site";
import "./globals.css";

// Body. Neutral on purpose — it carries the reading, not the personality.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Display. Archivo descends from grotesques drawn for signage and printed
// forms, and its width axis lets one family cover hero-to-subsection.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

// Utility. Record labels, counts, stack tags.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ogImage = {
  url: "/og-image.png",
  // The real dimensions of the file. Declaring 1200x630 for a 1536x1024 image
  // makes scrapers lay out a card that does not match what they fetch.
  width: 1536,
  height: 1024,
  alt: "Dieter Lunn — Software Developer",
};

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    // Child routes set a bare title; the suffix is applied here once.
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_AUTHOR, url: canonical("/") }],
  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,
  openGraph: {
    type: "website",
    url: canonical("/"),
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_CA",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // No `creator` handle — there is no social account to attribute this to.
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Trailing slash, because trailingSlash: true is what the host serves.
  alternates: {
    canonical: canonical("/"),
  },
};

/**
 * Scroll reveal, as a plain inline script rather than a client component.
 *
 * It runs at the top of <body>, before the page paints, so revealed blocks
 * never flash in at full opacity and then hide. It also doesn't depend on
 * React hydration: if the bundle fails, content has still been shown.
 *
 * The MutationObserver matters — client-side navigation (the next-project
 * link) swaps in new `.reveal` nodes with no page load to hook, and without
 * a rescan those would stay at opacity 0 permanently.
 *
 * Static string, no interpolation of any kind — nothing here is attacker
 * controlled.
 */
const revealScript = `(function(){
var d=document;
function onReady(fn){ if(d.readyState==='loading') d.addEventListener('DOMContentLoaded',fn); else fn(); }

// Scroll reveal. Gated on reduced motion, since it is purely motion.
try{
  if(('IntersectionObserver' in window) && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    d.documentElement.classList.add('js-reveal');
    var seen=new WeakSet();
    var io=new IntersectionObserver(function(es){
      for(var i=0;i<es.length;i++){
        if(es[i].isIntersecting){ es[i].target.classList.add('is-revealed'); io.unobserve(es[i].target); }
      }
    },{rootMargin:'0px 0px -8% 0px',threshold:0.05});
    var scan=function(){
      var els=d.querySelectorAll('.reveal:not(.is-revealed)');
      for(var i=0;i<els.length;i++){ if(!seen.has(els[i])){ seen.add(els[i]); io.observe(els[i]); } }
    };
    onReady(function(){ scan(); new MutationObserver(scan).observe(d.body,{childList:true,subtree:true}); });
  }
}catch(e){ d.documentElement.classList.remove('js-reveal'); }

// Scroll spy. Deliberately NOT gated on reduced motion — marking the current
// section is an orientation cue, not an animation.
try{
  if(!('IntersectionObserver' in window)) return;
  var spy=null, watched=[];
  function build(){
    var links=d.querySelectorAll('.navlink[data-section]');
    var secs=[], map={}, i, el, id;
    for(i=0;i<links.length;i++){
      id=links[i].getAttribute('data-section');
      el=d.getElementById(id);
      if(el){ secs.push(el); map[id]=links[i]; }
    }
    if(spy){ spy.disconnect(); spy=null; }
    watched=secs;
    if(!secs.length) return;
    var on={};
    var paint=function(){
      // Last match in document order, so scrolling down advances promptly
      // when two sections straddle the band.
      var cur=null;
      for(var j=0;j<secs.length;j++) if(on[secs[j].id]) cur=secs[j].id;
      for(var k in map) map[k].removeAttribute('aria-current');
      if(cur && map[cur]) map[cur].setAttribute('aria-current','true');
    };
    spy=new IntersectionObserver(function(es){
      for(var j=0;j<es.length;j++) on[es[j].target.id]=es[j].isIntersecting;
      paint();
    },{rootMargin:'-45% 0px -50% 0px'});
    for(i=0;i<secs.length;i++) spy.observe(secs[i]);
  }
  onReady(function(){
    build();
    // Client-side navigation replaces the sections; rebuild when the ones we
    // are watching are no longer in the document.
    new MutationObserver(function(){
      for(var i=0;i<watched.length;i++) if(!watched[i].isConnected) return build();
      if(!watched.length && d.querySelector('.navlink[data-section]')) build();
    }).observe(d.body,{childList:true,subtree:true});
  });
}catch(e){}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${archivo.variable} ${plexMono.variable} antialiased`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        {children}
      </body>
    </html>
  );
}
