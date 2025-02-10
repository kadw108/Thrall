import { Howl } from "howler";

function addMaxVolume(howl: Howl, maxVolume: number) {
  howl["maxVolume"] = maxVolume;
  return howl;
}

// doesn't work, don't know why
function addRate(howl: Howl, rate: number) {
  howl["rate"] = rate;
  return howl;
}

/*
Note: some sites don't seem to support mp3s. Will act like they're support but they'll load infinitely. Not sure why
On the other hand, mobile doesn't support ogg in certain formats (???)
Must investigate best format/codec to use
*/

/* SOUNDTRACKS */

export const menuMusic: Array<Howl> = [
  addMaxVolume(
    new Howl({
      src: [
       "assets/sound/piano2.ogg",
       "assets/sound/piano2.mp3",
      ],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    1.5
  ),
  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise.ogg", "assets/sound/whitenoise.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.5
  ),
  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise2.ogg", "assets/sound/whitenoise2.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.3
  ),
];

export const mallMusic: Array<Howl> = [
  addMaxVolume(
    new Howl({
      src: [
       "assets/sound/4InTheAfternoon.ogg",
       "assets/sound/4InTheAfternoon.mp3",
      ],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    1.1
  ),
  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise.ogg", "assets/sound/whitenoise.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.5
  ),
  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise2.ogg", "assets/sound/whitenoise2.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.3
  ),
];

export const deathMusic: Array<Howl> = [
  addMaxVolume(
    new Howl({
      src: [
        "assets/sound/spiderOnTheCeiling.ogg",
        "assets/sound/spiderOnTheCeiling.mp3",
      ],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.7
  ),
  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise.ogg", "assets/sound/whitenoise.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.5
  ),
  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise2.ogg", "assets/sound/whitenoise2.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.4
  ),
];

export const heavenMusic: Array<Howl> = [
  addMaxVolume(
    new Howl({
      src: [
        "assets/sound/explodingHeadRevelation.ogg",
        "assets/sound/explodingHeadRevelation.mp3",
      ],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.9
  ),

  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise.ogg", "assets/sound/whitenoise.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.4
  ),
  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise2.ogg", "assets/sound/whitenoise2.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.3
  ),
];

export const bedroomMusic: Array<Howl> = [
  addMaxVolume(
    new Howl({
      src: [
        "assets/sound/youreMagic.ogg",
        "assets/sound/youreMagic.mp3",
      ],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }), 0.9
  ),
  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise.ogg", "assets/sound/whitenoise.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.4
  ),
  addMaxVolume(
    new Howl({
      src: ["assets/sound/whitenoise2.ogg", "assets/sound/whitenoise2.mp3"],
      loop: true,

      autoplay: false,
      volume: 0,
      html5: true,
      // preload: "metadata",
    }),
    0.4
  ),
];