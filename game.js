/* ============================================================
   DRAGON LABYRINTH — game.js
   Complete Pixel-Art Fantasy RPG Engine
   ============================================================ */

'use strict';

/* ============================================================
   QUESTION BANK (Bengali Primary Science - Accidents & First Aid)
   ============================================================ */
const QUESTION_BANK = [
  { q:"সুস্থ থাকার পাশাপাশি আমাদের দেহের কী প্রয়োজন?", opts:["শুধু খাবার","শুধু ঘুম","সুরক্ষা","ব্যায়াম"], ans:2 },
  { q:"আমাদের জীবনে দুর্ঘটনা কেন ঘটে?", opts:["অসাবধানতার কারণে","ইচ্ছাকৃতভাবে","ভাগ্যের কারণে","আনন্দের জন্য"], ans:0 },
  { q:"গাছ থেকে পড়ে যাওয়া কোন ধরনের ঘটনা?", opts:["খেলাধুলা","দুর্ঘটনা","বিনোদন","ব্যায়াম"], ans:1 },
  { q:"সাপের কামড়ে বিষ রক্তে মিশলে কী হয়?", opts:["শ্বাসকষ্ট ও পচন সৃষ্টি হতে পারে","ক্ষুধা বাড়ে","হাসি পায়","ঘুম আসে"], ans:0 },
  { q:"দুর্ঘটনা মুক্ত থাকতে আমাদের কী করা জরুরি?", opts:["সতর্কতা অবলম্বন করা","অলস থাকা","দ্রুত দৌড়ানো","ভয় পাওয়া"], ans:0 },
  { q:"গরম হাড়ি বা পাতিল খালি হাতে ধরলে কী হয়?", opts:["কিছু হয় না","হাত পুড়ে যেতে পারে","হাত ঠান্ডা হয়","হাত শক্ত হয়"], ans:1 },
  { q:"বৈদ্যুতিক শর্টসার্কিট থেকে কী হতে পারে?", opts:["বৃষ্টি","আগুন লাগার সম্ভাবনা","ঠান্ডা বাড়ে","পানি আসে"], ans:1 },
  { q:"তড়িতাহত হওয়া মানে কী?", opts:["বিদ্যুৎস্পৃষ্ট হওয়া","জ্বরে আক্রান্ত হওয়া","দৌড়ানো","সাঁতার কাটা"], ans:0 },
  { q:"ভেজা হাতে বৈদ্যুতিক সুইচ ধরলে কী হতে পারে?", opts:["কিছু হয় না","শক লাগতে পারে","আরাম লাগে","হাত ঠান্ডা হয়"], ans:1 },
  { q:"সড়ক দুর্ঘটনা কেন ঘটে?", opts:["ট্রাফিক নিয়ম না মানলে","জোরে হাঁটলে","কথা বললে","পড়াশোনা করলে"], ans:0 },
  { q:"রাস্তা পার হওয়ার সময় কোন দিকে লক্ষ্য করতে হয়?", opts:["আকাশের দিকে","পায়ের দিকে","ডান ও বাম দিক","শুধু পেছনের দিকে"], ans:2 },
  { q:"রাস্তা পার হওয়ার জন্য কোনটি সবচেয়ে নিরাপদ?", opts:["ফ্লাইওভার","আন্ডারপাস","জেব্রাক্রসিং বা ফুটপাথ","রাস্তার মাঝখান"], ans:2 },
  { q:"ডাক্তার আসার আগে রোগীকে যে সাময়িক সেবা দেওয়া হয় তাকে কী বলে?", opts:["চূড়ান্ত চিকিৎসা","অপারেশন","প্রাথমিক চিকিৎসা","টিকা দান"], ans:2 },
  { q:"প্রাথমিক চিকিৎসার মূল উদ্দেশ্য কী?", opts:["জীবনহানির ঝুঁকি কমানো","রোগীকে ভয় দেখানো","অপারেশন করা","ওষুধ তৈরি করা"], ans:0 },
  { q:"গাছ থেকে পড়ে হাড় ভেঙে গেলে প্রথমে কী ব্যবহার করা উচিত?", opts:["গরম পানি","বরফ বা ঠান্ডা পানি","তেল","পাউডার"], ans:1 },
  { q:"শরীর কেটে রক্ত পড়লে প্রথমে কী দিয়ে পরিষ্কার করতে হবে?", opts:["তুলা ও জীবাণুনাশক","কাদা মাটি","সাধারণ ধুলো","কাগজ"], ans:0 },
  { q:"পোড়া স্থানে কমপক্ষে কতক্ষণ পানি ঢালা উচিত?", opts:["১ মিনিট","২ মিনিট","১০ মিনিট","৫ সেকেন্ড"], ans:2 },
  { q:"পুড়ে যাওয়া স্থানে কোনটি লাগানো নিষিদ্ধ?", opts:["তেল বা ক্রিম","পানি","বরফ","স্যাভলন"], ans:0 },
  { q:"তড়িতাহত ব্যক্তিকে উদ্ধারের সময় প্রথম কাজ কী?", opts:["মেইন সুইচ বন্ধ করা","পানি ঢালা","হাত দিয়ে টানা","চিৎকার করা"], ans:0 },
  { q:"সাপে কামড়ালে ক্ষতস্থান শরীরের কোন লেভেলের নিচে রাখতে হবে?", opts:["হৃদপিণ্ড বা বুকের উচ্চতার নিচে","মাথার ওপরে","পিঠের পেছনে","কোমরের ওপরে"], ans:0 },
  { q:"পানিতে ডোবা ব্যক্তিকে উদ্ধারের পর প্রথমে কী করতে হয়?", opts:["পেট চেপে পানি বের করা","খাবার দেওয়া","কাত করে রাখা","হাসানো"], ans:0 },
  { q:"পানিতে ডোবা রোগীর শ্বাসপ্রশ্বাস বন্ধ হলে কী করতে হয়?", opts:["গান শোনাতে হয়","কান ধরে টানা","মুখে মুখ লাগিয়ে বাতাস দেওয়া","গাছে ঝোলানো"], ans:2 },
  { q:"বুকে ব্যথা ও শ্বাসকষ্ট হলে কোন বিশেষজ্ঞের শরণাপন্ন হতে হবে?", opts:["হৃদরোগ বিশেষজ্ঞ","নিউরোলোজিস্ট","চোখের ডাক্তার","সার্জন"], ans:0 },
  { q:"হঠাৎ কথা জড়িয়ে গেলে বা মুখ বেঁকে গেলে কিসের লক্ষণ হতে পারে?", opts:["জ্বর","ঠান্ডা","স্ট্রোক বা হৃদরোগ","পেট ব্যথা"], ans:2 },
  { q:"দুর্ঘটনা থেকে বাঁচার মূল মন্ত্র কী?", opts:["সর্বত্র সতর্কতা","বেশি শক্তি","দ্রুত কাজ করা","চুপ থাকা"], ans:0 },
  { q:"প্রাথমিক চিকিৎসা বক্সকে ইংরেজিতে কী বলে?", opts:["বুক বক্স","ফার্স্ট এইড বক্স","টুল বক্স","গিফট বক্স"], ans:1 },
  { q:"সাপে কাটলে কোনটি করা একদম নিষেধ?", opts:["ওঝা দেখানো বা চোষা","হাসপাতালে নেওয়া","শান্ত থাকা","স্থির থাকা"], ans:0 },
  { q:"ফোসকা পড়লে কী করা উচিত নয়?", opts:["পানি দেওয়া","ঢেকে রাখা","গলানো বা ফাটানো","বাতাস দেওয়া"], ans:2 },
  { q:"তড়িতাহত ব্যক্তিকে সরাসরি হাত দিয়ে ধরলে কী হবে?", opts:["সে সুস্থ হবে","উদ্ধারকারী নিজেও তড়িতাহত হবে","কিছুই হবে না","সে ভয় পাবে"], ans:1 },
  { q:"রোগীর বুকের মাঝখানে দুই হাত দিয়ে কতবার চাপ দিতে হয়?", opts:["১০ বার","২০ বার","৩০ বার","৫০ বার"], ans:2 },
  { q:"সাঁতার না জানলে একা কোথায় নামা উচিত নয়?", opts:["বিছানায়","চেয়ারে","পুকুর বা নদীতে","খেলার মাঠে"], ans:2 },
  { q:"বাড়ির চারপাশ পরিষ্কার রাখলে কোনটি লুকিয়ে থাকতে পারে না?", opts:["সাপ","বিড়াল","পাখি","প্রজাপতি"], ans:0 },
  { q:"প্রাথমিক চিকিৎসা শেষে রোগীকে কোথায় নেওয়া প্রয়োজন?", opts:["ডাক্তারের কাছে বা হাসপাতালে","পার্কে","বাজারে","সার্কাসে"], ans:0 },
  { q:"নিউরোলোজিস্ট কিসের ডাক্তার?", opts:["মস্তিষ্ক ও স্নায়ুর","হার্টের","চোখের","দাঁতের"], ans:0 },
  { q:"পোড়া স্থানে ফোসকা না ফাটানোর কারণ কী?", opts:["ইনফেকশন বা সংক্রমণ রোধ করতে","ব্যথা কমানোর জন্য","দেখতে সুন্দর লাগে বলে","কোনোটিই নয়"], ans:0 },
  { q:"মেইন সুইচ বন্ধ করা না গেলে রোগীকে সরাতে কী ব্যবহার করতে হবে?", opts:["লোহার রড","ভেজা কাপড়","শুকনো কাঠ বা বাঁশ","স্টিলের স্কেল"], ans:2 },
  { q:"সড়ক দুর্ঘটনার একটি বড় কারণ কী?", opts:["সাবধানে হাঁটা","নিয়ম না মেনে গাড়ি চালানো","ট্রাফিক সিগন্যাল মানা","ফুটপাথ ব্যবহার করা"], ans:1 },
  { q:"প্রাথমিক চিকিৎসা কে দিতে পারে?", opts:["শুধু ডাক্তার","শুধু নার্স","প্রশিক্ষিত বা সচেতন যে কেউ","শুধু পুলিশ"], ans:2 },
  { q:"আগুনে পোড়া স্থানে ঠান্ডা পানি দেওয়ার উদ্দেশ্য কী?", opts:["জ্বালাপোড়া কমানো ও ক্ষত গভীর হওয়া রোধ করা","শরীর ভেজানো","গোসল করা","কাপড় ধোয়া"], ans:0 },
  { q:"হাড় ভাঙা সন্দেহ হলে রোগীকে কী করা উচিত নয়?", opts:["বেশি নড়াচড়া করা","স্থির রাখা","শান্ত করা","হাসানো"], ans:0 }
];

/* ============================================================
   MAZE DEFINITION
   0 = wall, 1 = floor, 2 = start, 3 = exit,
   4-11 = gate positions, 9 = torch, 10 = treasure
   ============================================================ */
const TILE = { WALL:0, FLOOR:1, START:2, EXIT:3, TORCH:9, CHEST:10 };
const GATE_TILE_BASE = 4; // tiles 4-11 are gate IDs 0-7

const COLS = 40, ROWS = 30, TS = 32; // tile size in world pixels

/* Hand-crafted maze — rich, multi-region labyrinth */
const RAW_MAZE = [
  "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
  "WS..............W.......W..............EW",
  "W.WWWWWW.WWWWW.W.WWWWW.W.WWWWWWWWWWW..W",
  "W.W....W.W...W.W.W...W.W.W..........W..W",
  "W.W.WW.W.W.G.W.....W.W.W.W.WWWWWWW.W..W",
  "W.W.W..W.W...WWWWWWW.W.W.W.W.....W.W..W",
  "W...W..W.WWWWW.......W...W.W.WWW.W.W..W",
  "WWWWW..W.......WWWWWWWWWWW.W.W.W.W.W..W",
  "W......WWWWWWW.W...........W...W.W.W..W",
  "W.WWWWWW.....W.W.WWWWWWWWWWWWWW.W.W..W",
  "W.W......WWW.W.W.W.............W.W.W..W",
  "W.W.WWWWWW...W.W.W.WWWWWWWWWWW.W.W..W",
  "W.W.W....W...W.W.W.W...........W.W...W",
  "W.W.W.GG.W...W.W.W.W.WWWWWWWWW.W.WWWW",
  "W.W.WWWWWW...W.W.W.W.W.........W......W",
  "W.W......W...W.W.W.W.W.WWWWWWWWWWWWW.W",
  "W.WWWWWW.W...W.W.W.W.W.W.............W",
  "W........W...W...W.W.W.W.WWWWWWWWWWWWW",
  "WWWWWWWW.WWWWWWWWW.W.W.W.W............W",
  "W........W.........W.W.W.W.WWWWWWWWWW.W",
  "W.WWWWWW.W.WWWWWWWWW.W.W.W.W..........W",
  "W.W....W.W.W.........W.W.W.WWWWWWWWWW.W",
  "W.W.GG.W.W.W.WWWWWWWW.W.W.W...........W",
  "W.W....W.W.W.W........W.W.W.WWWWWWWWWWW",
  "W.WWWWWW.W.W.W.WWWWWWWW.W.W.W.........W",
  "W........W.W.W.W........W.W.W.WWWWWWWW.",
  "WWWWWWWWWW.W.W.W.WWWWWWWW.W.W.W.......W",
  "W..........W.W.W.W........W.W.W.WWWWWWW",
  "W.WWWWWWWWWW.W.W.WWWWWWWWWW.W.G.......W",
  "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
].map(r => r.split(''));

/* Convert ASCII to tile IDs */
function buildMaze() {
  const maze = [];
  let gateCount = 0;
  let startX = 1, startY = 1, exitX = COLS-2, exitY = 1;
  const gates = [];

  for (let r = 0; r < ROWS; r++) {
    maze[r] = [];
    for (let c = 0; c < COLS; c++) {
      const ch = RAW_MAZE[r] ? (RAW_MAZE[r][c] || 'W') : 'W';
      if (ch === 'W') maze[r][c] = TILE.WALL;
      else if (ch === 'S') { maze[r][c] = TILE.START; startX = c; startY = r; }
      else if (ch === 'E') { maze[r][c] = TILE.EXIT; exitX = c; exitY = r; }
      else if (ch === 'G') {
        if (gateCount < 8) {
          const gateId = gateCount++;
          maze[r][c] = GATE_TILE_BASE + gateId;
          gates.push({ id: gateId, col: c, row: r, unlocked: false });
        } else maze[r][c] = TILE.FLOOR;
      }
      else if (ch === 'T') maze[r][c] = TILE.TORCH;
      else if (ch === 'C') maze[r][c] = TILE.CHEST;
      else maze[r][c] = TILE.FLOOR;
    }
  }

  // Fill any remaining gate slots programmatically
  const fixedGatePositions = [
    [4,4],[13,3],[22,3],[13,13],[22,13],[13,22],[22,22],[28,28]
  ];
  while (gateCount < 8) {
    const [pr,pc] = fixedGatePositions[gateCount] || [5,5];
    if (maze[pr] && maze[pr][pc] !== TILE.WALL) {
      maze[pr][pc] = GATE_TILE_BASE + gateCount;
      gates.push({ id: gateCount, col: pc, row: pr, unlocked: false });
    }
    gateCount++;
  }

  return { maze, startX, startY, exitX, exitY, gates };
}

/* ============================================================
   REGIONS
   ============================================================ */
const REGIONS = [
  { name:'প্রবেশদ্বার', minR:0, maxR:9, minC:0, maxC:19, color:'#1a3a1a', torchColor:'#ff9900' },
  { name:'প্রাচীন ধ্বংসস্তূপ', minR:0, maxR:9, minC:20, maxC:39, color:'#2a1a0a', torchColor:'#ffcc44' },
  { name:'গুহার গহীনে', minR:10, maxR:19, minC:0, maxC:19, color:'#0a0a2a', torchColor:'#4488ff' },
  { name:'লাভার করিডোর', minR:10, maxR:19, minC:20, maxC:39, color:'#2a0a00', torchColor:'#ff4400' },
  { name:'ড্রাগনের কক্ষ', minR:20, maxR:29, minC:0, maxC:39, color:'#1a0000', torchColor:'#ff2200' }
];

function getRegion(row, col) {
  for (const r of REGIONS) {
    if (row >= r.minR && row <= r.maxR && col >= r.minC && col <= r.maxC) return r;
  }
  return REGIONS[0];
}

/* ============================================================
   AUDIO ENGINE (Web Audio API — no external files needed)
   ============================================================ */
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.musicEnabled = true;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.oscillators = [];
    this.init();
  }

  init() {
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.5;
      this.masterGain.connect(this.ctx.destination);
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0.3;
      this.musicGain.connect(this.masterGain);
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = 0.5;
      this.sfxGain.connect(this.masterGain);
    } catch(e) { console.warn('Audio unavailable'); }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  playTone(freq, type='sine', duration=0.2, vol=0.3, delay=0) {
    if (!this.ctx || !this.enabled) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + delay + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration + 0.01);
    } catch(e) {}
  }

  playUnlock() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f,i) => this.playTone(f,'sine',0.25,0.4,i*0.1));
  }

  playWrong() {
    this.playTone(200,'sawtooth',0.3,0.4);
    this.playTone(150,'sawtooth',0.3,0.3,0.15);
  }

  playStep() {
    if (Math.random() > 0.3) return;
    this.playTone(80 + Math.random()*20, 'square', 0.05, 0.1);
  }

  playRoar() {
    [100,80,60,50].forEach((f,i) => this.playTone(f,'sawtooth',0.4,0.5,i*0.1));
  }

  playHeartbeat() {
    this.playTone(60,'sine',0.1,0.6);
    this.playTone(55,'sine',0.1,0.5,0.15);
  }

  playTeleport() {
    for (let i=0; i<8; i++) this.playTone(800 - i*80,'sine',0.1,0.3,i*0.05);
  }

  playGateInteract() {
    this.playTone(440,'sine',0.15,0.3);
    this.playTone(550,'sine',0.15,0.25,0.1);
  }

  playVictory() {
    const notes = [523,659,784,1047,1319,784,1047,1568];
    notes.forEach((f,i) => this.playTone(f,'sine',0.3,0.5,i*0.12));
  }

  startAmbience(tension=0) {
    if (!this.ctx || !this.musicEnabled) return;
    this.stopAmbience();
    // Cave drone
    const baseFreq = 60 - tension * 20;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 200 + tension * 100;
    const gainNode = this.ctx.createGain();
    gainNode.gain.value = 0.1 + tension * 0.1;
    osc.type = 'sawtooth';
    osc.frequency.value = baseFreq;
    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.musicGain);
    osc.start();
    this._ambiOsc = osc;
    this._ambiGain = gainNode;
  }

  stopAmbience() {
    try { this._ambiOsc && this._ambiOsc.stop(); } catch(e) {}
    this._ambiOsc = null;
  }

  toggle() { this.enabled = !this.enabled; if (!this.enabled) this.stopAmbience(); return this.enabled; }
  toggleMusic() { this.musicEnabled = !this.musicEnabled; if (!this.musicEnabled) this.stopAmbience(); else this.startAmbience(); return this.musicEnabled; }
}

/* ============================================================
   PARTICLE SYSTEM
   ============================================================ */
class ParticleSystem {
  constructor() { this.particles = []; }

  emit(x, y, opts={}) {
    const count = Math.min(opts.count||6, 12); // mobile-safe limit
    for (let i=0; i<count; i++) {
      const angle = (opts.angle||0) + (Math.random()-0.5)*(opts.spread||Math.PI*2);
      const speed = (opts.speed||60) * (0.5 + Math.random());
      this.particles.push({
        x, y,
        vx: Math.cos(angle)*speed,
        vy: Math.sin(angle)*speed,
        life: 1,
        decay: opts.decay||(0.8+Math.random()*1.2),
        color: opts.color||'#ffcc44',
        size: opts.size||(2+Math.random()*3),
        gravity: opts.gravity||0,
        glow: opts.glow||false
      });
    }
  }

  emitEmbers(x, y) {
    this.emit(x, y, { count:3, color:'#ff6600', speed:30, decay:1.5, gravity:-20, size:2, glow:true });
  }

  emitUnlock(x, y) {
    this.emit(x, y, { count:10, color:'#7b4fff', speed:80, decay:2, size:4, glow:true });
    this.emit(x, y, { count:8, color:'#ffcc44', speed:60, decay:2.5, size:3, glow:true });
  }

  emitTeleport(x, y) {
    this.emit(x, y, { count:8, color:'#ff3300', speed:60, decay:3, size:3, glow:true });
  }

  update(dt) {
    this.particles = this.particles.filter(p => {
      p.life -= p.decay * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += p.gravity * dt;
      return p.life > 0;
    });
  }

  draw(ctx, camX, camY) {
    this.particles.forEach(p => {
      const alpha = Math.max(0, p.life);
      ctx.save();
      ctx.globalAlpha = alpha;
      if (p.glow) {
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
      }
      ctx.fillStyle = p.color;
      ctx.fillRect(
        Math.round(p.x - camX - p.size/2),
        Math.round(p.y - camY - p.size/2),
        Math.ceil(p.size), Math.ceil(p.size)
      );
      ctx.restore();
    });
  }
}

/* ============================================================
   CAMERA SYSTEM
   ============================================================ */
class Camera {
  constructor(cw, ch) {
    this.x = 0; this.y = 0;
    this.targetX = 0; this.targetY = 0;
    this.cw = cw; this.ch = ch;
    this.zoom = 2;
    this.shake = 0;
    this.lookAheadX = 0;
    this.lookAheadY = 0;
  }

  follow(px, py, dt) {
    const hw = this.cw / (2 * this.zoom);
    const hh = this.ch / (2 * this.zoom);
    this.targetX = px - hw + this.lookAheadX;
    this.targetY = py - hh + this.lookAheadY;
    const maxX = COLS*TS - this.cw/this.zoom;
    const maxY = ROWS*TS - this.ch/this.zoom;
    this.targetX = Math.max(0, Math.min(maxX, this.targetX));
    this.targetY = Math.max(0, Math.min(maxY, this.targetY));
    const lerp = 1 - Math.pow(0.05, dt);
    this.x += (this.targetX - this.x) * lerp;
    this.y += (this.targetY - this.y) * lerp;
  }

  setLookAhead(dx, dy) {
    const str = 24;
    this.lookAheadX += (dx*str - this.lookAheadX) * 0.1;
    this.lookAheadY += (dy*str - this.lookAheadY) * 0.1;
  }

  triggerShake(intensity=0.4) { this.shake = Math.max(this.shake, intensity); }

  getShakeOffset() {
    if (this.shake < 0.01) return {sx:0, sy:0};
    const sx = (Math.random()-0.5)*this.shake*10;
    const sy = (Math.random()-0.5)*this.shake*10;
    this.shake *= 0.85;
    return {sx, sy};
  }

  resize(cw, ch, isMobile) {
    this.cw = cw; this.ch = ch;
    this.zoom = isMobile ? 2.5 : 2;
  }

  worldToScreen(wx, wy) {
    return {
      x: (wx - this.x) * this.zoom,
      y: (wy - this.y) * this.zoom
    };
  }
}

/* ============================================================
   GAME STATE MACHINE
   ============================================================ */
const STATE = {
  LOADING: 'LOADING', TITLE: 'TITLE', HOWTOPLAY: 'HOWTOPLAY',
  CHARSELECT: 'CHARSELECT', INTRO: 'INTRO', GAMEPLAY: 'GAMEPLAY',
  QUESTION: 'QUESTION', PAUSED: 'PAUSED', VICTORY: 'VICTORY', GAMEOVER: 'GAMEOVER'
};

/* ============================================================
   MAIN GAME CLASS
   ============================================================ */
class DragonLabyrinth {
  constructor() {
    this.state = STATE.LOADING;
    this.selectedChar = null;
    this.canvas = null;
    this.ctx = null;
    this.minimapCanvas = null;
    this.minimapCtx = null;
    this.raf = null;
    this.lastTime = 0;

    // World
    const built = buildMaze();
    this.maze = built.maze;
    this.startX = built.startX;
    this.startY = built.startY;
    this.exitX = built.exitX;
    this.exitY = built.exitY;
    this.gates = built.gates;
    this.exploredTiles = new Set();

    // Player
    this.player = { x:0, y:0, facing:'right', moving:false, animTimer:0, frameIndex:0 };

    // Timer
    this.totalTime = 20 * 60; // seconds
    this.timeLeft = this.totalTime;
    this.gameStarted = false;

    // Stats
    this.wrongAnswers = 0;
    this.correctAnswers = 0;
    this.gatesUnlocked = 0;

    // Input
    this.keys = {};
    this.touchDirs = { up:false, down:false, left:false, right:false };
    this.isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    // Subsystems
    this.audio = new AudioEngine();
    this.particles = new ParticleSystem();
    this.camera = new Camera(window.innerWidth, window.innerHeight);

    // Question state
    this.activeGate = null;
    this.currentQuestion = null;
    this.usedQuestions = new Set();
    this.answerLocked = false;

    // Cutscene
    this.cutsceneIndex = 0;
    this.cutsceneLines = [
      { speaker:'', text:'암흑의 미로... 수천년 전부터 존재한 이 곳에 당신이 갇혔다.' },
      { speaker:'수수께끼의 목소리', text:'এখানে একটি প্রাচীন ড্রাগন ঘুমাচ্ছে। সে ২০ মিনিটে জেগে উঠবে!' },
      { speaker:'수수께끼의 목소리', text:'রাস্তায় ৮টি জাদুর গেট আছে। প্রশ্নের সঠিক উত্তর দিয়ে এগিয়ে যাও!' },
      { speaker:'수수께끼의 목소리', text:'ভুল উত্তর দিলে শুরুতে ফিরে যাবে। তবে হতাশ হয়ো না — খোলা গেট বন্ধ হবে না!' },
      { speaker:'', text:'সাবধানে এগিয়ে যাও। তোমার জ্ঞানই তোমার অস্ত্র। পালাও মহাবীর!' }
    ];

    // Visual
    this.tensionLevel = 0; // 0-1
    this.darkMode = false;
    this.spriteImages = {};
    this.lightMode = false;

    // Heartbeat timer
    this.heartbeatTimer = 0;
    this.dragonAnimTimer = 0;
    this.currentRegionName = 'প্রবেশদ্বার';

    this.init();
  }

  /* ---- INIT ---- */
  init() {
    this.canvas = document.getElementById('game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.minimapCanvas = document.getElementById('minimap-canvas');
    this.minimapCtx = this.minimapCanvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
    this.minimapCtx.imageSmoothingEnabled = false;

    this.loadAssets().then(() => {
      this.loadSave();
      this.setupInput();
      this.setupUI();
      this.resize();
      this.showScreen(STATE.TITLE);
      this.startLoop();
    });
  }

  /* ---- ASSET LOADING ---- */
  async loadAssets() {
    const imgs = {
      boy:     'assets/boy.png',
      boyrun:  'assets/boyrun.png',
      girl:    'assets/girl.png',
      girlrun: 'assets/girlrun.png',
      dragonSleep: 'assets/dragonsleep.png',
      dragonFire:  'assets/dragonfire.png'
    };

    const bar = document.getElementById('loading-bar');
    const text = document.getElementById('loading-text');
    const msgs = ['প্রাচীন মানচিত্র লোড হচ্ছে...','ড্রাগনকে জাগানো হচ্ছে...','সীলগুলো স্থাপন করা হচ্ছে...','প্রস্তুত!'];
    let done = 0;
    const total = Object.keys(imgs).length;

    await Promise.all(Object.entries(imgs).map(([key, src]) =>
      new Promise(res => {
        const img = new Image();
        img.onload = () => { this.spriteImages[key] = img; };
        img.onerror = () => { /* fallback: no image, drawn with canvas */ };
        img.src = src;
        img.onload = img.onerror = () => {
          if (img.naturalWidth) this.spriteImages[key] = img;
          done++;
          bar.style.width = (done/total*100)+'%';
          text.textContent = msgs[Math.min(Math.floor(done/total*4), 3)];
          res();
        };
      })
    ));

    await new Promise(r => setTimeout(r, 300));
  }

  /* ---- SAVE / LOAD ---- */
  savePersist() {
    try {
      const data = {
        gatesUnlocked: this.gates.filter(g=>g.unlocked).map(g=>g.id),
        settings: { lightMode: this.lightMode, soundEnabled: this.audio.enabled }
      };
      localStorage.setItem('dragonlabyrinth_save', JSON.stringify(data));
    } catch(e) {}
  }

  loadSave() {
    try {
      const raw = localStorage.getItem('dragonlabyrinth_save');
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.settings) {
        this.lightMode = data.settings.lightMode || false;
        this.audio.enabled = data.settings.soundEnabled !== false;
        if (this.lightMode) document.body.classList.add('light-mode');
      }
    } catch(e) {}
  }

  /* ---- RESIZE ---- */
  resize() {
    const W = window.innerWidth, H = window.innerHeight;
    this.canvas.width = W; this.canvas.height = H;
    this.camera.resize(W, H, this.isMobile);
    this.ctx.imageSmoothingEnabled = false;
    // Minimap
    const mm = this.isMobile ? 72 : 100;
    this.minimapCanvas.width = mm;
    this.minimapCanvas.height = mm;
  }

  /* ---- UI SETUP ---- */
  setupUI() {
    // Title screen
    document.getElementById('btn-new-game').onclick = () => {
      this.audio.resume();
      this.showScreen(STATE.CHARSELECT);
    };
    document.getElementById('btn-how-to-play').onclick = () => {
      this.audio.resume();
      this.showScreen(STATE.HOWTOPLAY);
    };
    document.getElementById('btn-close-howto').onclick = () => this.showScreen(STATE.TITLE);

    // Check for saved game
    const hasSave = localStorage.getItem('dragonlabyrinth_save');
    const btnCont = document.getElementById('btn-continue');
    if (hasSave) {
      btnCont.style.display = 'block';
      btnCont.onclick = () => {
        this.audio.resume();
        this.showScreen(STATE.CHARSELECT);
      };
    }

    // Character select
    document.querySelectorAll('.char-card').forEach(card => {
      card.onclick = () => {
        document.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedChar = card.dataset.char;
        document.getElementById('btn-start-game').disabled = false;
      };
    });
    document.getElementById('btn-start-game').onclick = () => {
      if (!this.selectedChar) return;
      this.startNewGame();
    };

    // Cutscene
    document.getElementById('screen-intro').onclick = () => this.advanceCutscene();

    // Pause
    document.getElementById('btn-resume').onclick = () => this.resume();
    document.getElementById('btn-restart').onclick = () => this.restartGame();
    document.getElementById('btn-title').onclick = () => { this.showScreen(STATE.TITLE); };
    document.getElementById('btn-toggle-sound').onclick = (e) => {
      const on = this.audio.toggle();
      e.target.textContent = on ? '🔊 শব্দ: চালু' : '🔇 শব্দ: বন্ধ';
      this.savePersist();
    };
    document.getElementById('btn-toggle-dark').onclick = (e) => {
      this.lightMode = !this.lightMode;
      document.body.classList.toggle('light-mode', this.lightMode);
      e.target.textContent = this.lightMode ? '☀️ দিন মোড' : '🌙 রাত মোড';
      this.savePersist();
    };

    // Victory / Game Over
    document.getElementById('btn-victory-play-again').onclick = () => this.restartGame();
    document.getElementById('btn-victory-title').onclick = () => this.showScreen(STATE.TITLE);
    document.getElementById('btn-gameover-retry').onclick = () => this.restartGame();
    document.getElementById('btn-gameover-title').onclick = () => this.showScreen(STATE.TITLE);

    // Mobile interact
    document.getElementById('btn-interact').onclick = () => {
      if (this.state === STATE.GAMEPLAY) this.tryInteract();
    };
    document.getElementById('btn-pause-mobile').onclick = () => {
      if (this.state === STATE.GAMEPLAY) this.pause();
    };
  }

  /* ---- INPUT SETUP ---- */
  setupInput() {
    // Keyboard
    window.addEventListener('keydown', e => {
      this.keys[e.code] = true;
      if (e.code === 'KeyQ' && this.state === STATE.GAMEPLAY) this.tryInteract();
      if (e.code === 'Escape') {
        if (this.state === STATE.GAMEPLAY) this.pause();
        else if (this.state === STATE.PAUSED) this.resume();
        else if (this.state === STATE.QUESTION) { /* can't escape questions */ }
      }
      e.preventDefault && ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code) && e.preventDefault();
    });
    window.addEventListener('keyup', e => { this.keys[e.code] = false; });

    // Mobile D-pad
    ['up','down','left','right'].forEach(dir => {
      const btn = document.getElementById('dpad-'+dir);
      if (!btn) return;
      const set = (v) => { this.touchDirs[dir] = v; };
      btn.addEventListener('touchstart', e => { e.preventDefault(); set(true); btn.classList.add('pressed'); }, {passive:false});
      btn.addEventListener('touchend', e => { e.preventDefault(); set(false); btn.classList.remove('pressed'); }, {passive:false});
      btn.addEventListener('mousedown', () => set(true));
      btn.addEventListener('mouseup', () => set(false));
    });

    // Resize
    window.addEventListener('resize', () => this.resize());
  }

  /* ---- SCREEN MANAGEMENT ---- */
  showScreen(newState) {
    const screenMap = {
      [STATE.TITLE]:     'screen-title',
      [STATE.HOWTOPLAY]: 'screen-howtoplay',
      [STATE.CHARSELECT]:'screen-charselect',
      [STATE.INTRO]:     'screen-intro',
      [STATE.GAMEPLAY]:  'screen-game',
      [STATE.QUESTION]:  'screen-question',
      [STATE.PAUSED]:    'screen-pause',
      [STATE.VICTORY]:   'screen-victory',
      [STATE.GAMEOVER]:  'screen-gameover'
    };

    // Manage game screen visibility separately
    const gameScreen = document.getElementById('screen-game');

    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
      s.style.display = '';
    });

    const targetId = screenMap[newState];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.classList.add('active');
        el.style.display = 'flex';
      }
    }

    // Game screen is always visible during gameplay/question/pause
    if ([STATE.GAMEPLAY, STATE.QUESTION, STATE.PAUSED].includes(newState)) {
      gameScreen.style.display = 'block';
      gameScreen.style.zIndex = newState === STATE.GAMEPLAY ? '1' : '1';
    }

    this.state = newState;

    // Special screen inits
    if (newState === STATE.PAUSED) {
      const mins = Math.floor(this.timeLeft/60).toString().padStart(2,'0');
      const secs = Math.floor(this.timeLeft%60).toString().padStart(2,'0');
      document.getElementById('pause-timer').textContent = `${mins}:${secs}`;
      document.getElementById('pause-gates').textContent = `${this.gatesUnlocked}/8`;
    }
  }

  /* ---- GAME START ---- */
  startNewGame() {
    this.timeLeft = this.totalTime;
    this.wrongAnswers = 0;
    this.correctAnswers = 0;
    this.gatesUnlocked = 0;
    this.exploredTiles.clear();
    this.usedQuestions.clear();
    this.tensionLevel = 0;

    // Reset gates
    const built = buildMaze();
    this.maze = built.maze;
    this.startX = built.startX;
    this.startY = built.startY;
    this.exitX = built.exitX;
    this.exitY = built.exitY;
    this.gates = built.gates;

    this.spawnPlayer();
    this.gameStarted = false;
    this.cutsceneIndex = 0;

    // Start cutscene
    this.showScreen(STATE.INTRO);
    this.renderIntroFrame(0);
    this.showCutsceneLine(0);
    this.audio.startAmbience(0);
  }

  spawnPlayer() {
    this.player.x = (this.startX + 0.5) * TS;
    this.player.y = (this.startY + 0.5) * TS;
    this.player.moving = false;
  }

  teleportToStart() {
    this.audio.playTeleport();
    this.particles.emitTeleport(this.player.x, this.player.y);
    this.spawnPlayer();
    this.camera.triggerShake(0.5);
    this.flashScreen('red');
  }

  /* ---- CUTSCENE ---- */
  showCutsceneLine(idx) {
    if (idx >= this.cutsceneLines.length) {
      this.beginGameplay();
      return;
    }
    const line = this.cutsceneLines[idx];
    document.getElementById('cutscene-speaker').textContent = line.speaker;
    document.getElementById('cutscene-msg').textContent = '';
    this.typeText('cutscene-msg', line.text);
  }

  typeText(elId, text) {
    const el = document.getElementById(elId);
    el.textContent = '';
    let i = 0;
    const iv = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(iv);
    }, 30);
  }

  advanceCutscene() {
    this.cutsceneIndex++;
    if (this.cutsceneIndex >= this.cutsceneLines.length) {
      this.beginGameplay();
    } else {
      this.showCutsceneLine(this.cutsceneIndex);
    }
  }

  beginGameplay() {
    this.gameStarted = true;
    this.showScreen(STATE.GAMEPLAY);
    document.getElementById('gates-display').textContent = `0/8`;
  }

  /* ---- GAME LOOP ---- */
  startLoop() {
    const loop = (ts) => {
      this.raf = requestAnimationFrame(loop);
      const dt = Math.min((ts - this.lastTime) / 1000, 0.05);
      this.lastTime = ts;
      this.update(dt);
      this.render();
    };
    this.raf = requestAnimationFrame(loop);
  }

  /* ---- UPDATE ---- */
  update(dt) {
    if (this.state === STATE.INTRO) {
      this.dragonAnimTimer += dt;
    }

    if (this.state !== STATE.GAMEPLAY) {
      this.particles.update(dt);
      return;
    }

    // Timer
    if (this.gameStarted) {
      this.timeLeft = Math.max(0, this.timeLeft - dt);
      this.updateTimerHUD();
      this.updateTension();

      if (this.timeLeft <= 0) {
        this.triggerGameOver();
        return;
      }

      // Heartbeat in critical phase
      if (this.tensionLevel > 0.85) {
        this.heartbeatTimer += dt;
        if (this.heartbeatTimer > 1) {
          this.heartbeatTimer = 0;
          this.audio.playHeartbeat();
        }
      }

      // Dragon rumble
      if (this.tensionLevel > 0.5 && Math.random() < dt * 0.3) {
        this.camera.triggerShake(0.2 * this.tensionLevel);
        if (this.tensionLevel > 0.75 && Math.random() < 0.3) {
          this.audio.playRoar();
          this.showDragonWarning();
        }
      }
    }

    // Player movement
    this.updatePlayer(dt);

    // Camera
    const dir = this.getInputDir();
    this.camera.setLookAhead(dir.dx, dir.dy);
    this.camera.follow(this.player.x, this.player.y, dt);

    // Particles
    this.particles.update(dt);

    // Ember particles along dragon's corridor
    if (this.tensionLevel > 0.3 && Math.random() < dt * 2) {
      const ex = Math.random() * COLS * TS;
      const ey = (ROWS-2) * TS + Math.random() * TS;
      this.particles.emitEmbers(ex, ey);
    }

    // Check interaction proximity
    this.checkNearGate();

    // Check exit
    const pc = Math.floor(this.player.x / TS), pr = Math.floor(this.player.y / TS);
    if (pc === this.exitX && pr === this.exitY && this.gatesUnlocked >= 8) {
      this.triggerVictory();
    }

    // Update explored tiles
    this.exploredTiles.add(`${pr},${pc}`);
    for (let dr=-2; dr<=2; dr++) for (let dc=-2; dc<=2; dc++) {
      const nr = pr+dr, nc = pc+dc;
      if (nr>=0&&nr<ROWS&&nc>=0&&nc<COLS) this.exploredTiles.add(`${nr},${nc}`);
    }

    // Update region display
    const region = getRegion(pr, pc);
    if (region.name !== this.currentRegionName) {
      this.currentRegionName = region.name;
      document.getElementById('region-display').textContent = region.name;
    }
  }

  getInputDir() {
    let dx = 0, dy = 0;
    if (this.keys['ArrowLeft']||this.keys['KeyA']||this.touchDirs.left) dx = -1;
    if (this.keys['ArrowRight']||this.keys['KeyD']||this.touchDirs.right) dx = 1;
    if (this.keys['ArrowUp']||this.keys['KeyW']||this.touchDirs.up) dy = -1;
    if (this.keys['ArrowDown']||this.keys['KeyS']||this.touchDirs.down) dy = 1;
    return { dx, dy };
  }

  updatePlayer(dt) {
    const dir = this.getInputDir();
    const speed = 120; // px/sec
    let nx = this.player.x + dir.dx * speed * dt;
    let ny = this.player.y + dir.dy * speed * dt;

    // Collision
    const margin = TS * 0.35;
    if (!this.isWall(nx - margin, this.player.y - margin) &&
        !this.isWall(nx + margin, this.player.y - margin) &&
        !this.isWall(nx - margin, this.player.y + margin) &&
        !this.isWall(nx + margin, this.player.y + margin)) {
      this.player.x = Math.max(0, Math.min(COLS*TS-1, nx));
    }
    if (!this.isWall(this.player.x - margin, ny - margin) &&
        !this.isWall(this.player.x + margin, ny - margin) &&
        !this.isWall(this.player.x - margin, ny + margin) &&
        !this.isWall(this.player.x + margin, ny + margin)) {
      this.player.y = Math.max(0, Math.min(ROWS*TS-1, ny));
    }

    const moving = dir.dx !== 0 || dir.dy !== 0;
    this.player.moving = moving;
    if (moving) {
      if (dir.dx > 0) this.player.facing = 'right';
      if (dir.dx < 0) this.player.facing = 'left';
      this.player.animTimer += dt;
      if (this.player.animTimer > 0.15) {
        this.player.animTimer = 0;
        this.player.frameIndex = 1 - this.player.frameIndex;
      }
      this.audio.playStep();
    } else {
      this.player.animTimer += dt;
      if (this.player.animTimer > 0.5) { this.player.animTimer = 0; this.player.frameIndex = 0; }
    }
  }

  isWall(wx, wy) {
    const col = Math.floor(wx / TS), row = Math.floor(wy / TS);
    if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return true;
    const tile = this.maze[row][col];
    if (tile === TILE.WALL) return true;
    // Gates block unless unlocked
    if (tile >= GATE_TILE_BASE && tile < GATE_TILE_BASE + 8) {
      const gateId = tile - GATE_TILE_BASE;
      const gate = this.gates[gateId];
      return gate && !gate.unlocked;
    }
    return false;
  }

  updateTension() {
    const ratio = 1 - (this.timeLeft / this.totalTime);
    this.tensionLevel = ratio;
    // Update ambience periodically
    if (Math.random() < 0.01) this.audio.startAmbience(this.tensionLevel);
  }

  updateTimerHUD() {
    const mins = Math.floor(this.timeLeft/60).toString().padStart(2,'0');
    const secs = Math.floor(this.timeLeft%60).toString().padStart(2,'0');
    const el = document.getElementById('timer-display');
    el.textContent = `${mins}:${secs}`;
    const hud = document.getElementById('hud-timer');
    if (this.timeLeft < 60) {
      hud.className = 'hud-block critical';
      document.getElementById('screen-game').classList.add('heartbeat');
    } else if (this.timeLeft < 5*60) {
      hud.className = 'hud-block warning';
      document.getElementById('screen-game').classList.remove('heartbeat');
    } else {
      hud.className = 'hud-block';
      document.getElementById('screen-game').classList.remove('heartbeat');
    }
  }

  checkNearGate() {
    const pc = Math.floor(this.player.x / TS), pr = Math.floor(this.player.y / TS);
    let near = false;
    for (let dr=-1; dr<=1; dr++) for (let dc=-1; dc<=1; dc++) {
      const nr = pr+dr, nc = pc+dc;
      if (nr>=0&&nr<ROWS&&nc>=0&&nc<COLS) {
        const tile = this.maze[nr][nc];
        if (tile >= GATE_TILE_BASE && tile < GATE_TILE_BASE+8) {
          const gateId = tile - GATE_TILE_BASE;
          const gate = this.gates[gateId];
          if (gate && !gate.unlocked) { near = true; this.activeGate = gate; }
        }
      }
    }
    if (!near) this.activeGate = null;
    document.getElementById('interact-prompt').classList.toggle('hidden', !near);
  }

  showDragonWarning() {
    const el = document.getElementById('dragon-warning');
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 2000);
  }

  /* ---- INTERACTION ---- */
  tryInteract() {
    if (this.activeGate && !this.activeGate.unlocked) {
      this.audio.playGateInteract();
      this.openQuestion(this.activeGate);
    }
  }

  openQuestion(gate) {
    this.answerLocked = false;

    // Pick question
    let available = QUESTION_BANK.map((_,i)=>i).filter(i=>!this.usedQuestions.has(i));
    if (available.length === 0) { this.usedQuestions.clear(); available = QUESTION_BANK.map((_,i)=>i); }
    const qi = available[Math.floor(Math.random()*available.length)];
    this.usedQuestions.add(qi);
    this.currentQuestion = { ...QUESTION_BANK[qi], gateId: gate.id };

    const q = this.currentQuestion;
    document.getElementById('question-text').textContent = q.q;
    const optsEl = document.getElementById('question-options');
    optsEl.innerHTML = '';
    const letters = ['ক', 'খ', 'গ', 'ঘ'];
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = `${letters[i]}) ${opt}`;
      btn.onclick = () => this.answerQuestion(i);
      optsEl.appendChild(btn);
    });

    const fb = document.getElementById('question-feedback');
    fb.className = 'hidden';
    fb.textContent = '';

    this.showScreen(STATE.QUESTION);
  }

  answerQuestion(choice) {
    if (this.answerLocked) return;
    this.answerLocked = true;

    const q = this.currentQuestion;
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);

    const correct = (choice === q.ans);
    btns[choice].classList.add(correct ? 'correct' : 'wrong');
    if (correct) btns[q.ans].classList.add('correct');

    const fb = document.getElementById('question-feedback');

    if (correct) {
      fb.textContent = '✅ সঠিক! গেট খুলে গেল!';
      fb.className = 'correct';
      this.correctAnswers++;
      this.audio.playUnlock();

      setTimeout(() => {
        this.unlockGate(q.gateId);
        this.showScreen(STATE.GAMEPLAY);
      }, 1500);
    } else {
      fb.textContent = '❌ ভুল! শুরুতে ফিরে যাও!';
      fb.className = 'wrong';
      this.wrongAnswers++;
      this.audio.playWrong();

      setTimeout(() => {
        this.showScreen(STATE.GAMEPLAY);
        this.teleportToStart();
      }, 1500);
    }
  }

  unlockGate(gateId) {
    const gate = this.gates[gateId];
    if (!gate) return;
    gate.unlocked = true;
    this.gatesUnlocked++;

    // Emit particles at gate world position
    const gx = (gate.col + 0.5) * TS, gy = (gate.row + 0.5) * TS;
    this.particles.emitUnlock(gx, gy);
    this.camera.triggerShake(0.3);

    document.getElementById('gates-display').textContent = `${this.gatesUnlocked}/8`;
    this.savePersist();

    // Check if exit should appear
    if (this.gatesUnlocked >= 8) {
      document.getElementById('region-display').textContent = '🏃 탈출! 출구로 달려!';
    }
  }

  /* ---- PAUSE ---- */
  pause() {
    if (this.state !== STATE.GAMEPLAY) return;
    this.showScreen(STATE.PAUSED);
  }

  resume() {
    if (this.state !== STATE.PAUSED) return;
    this.showScreen(STATE.GAMEPLAY);
  }

  restartGame() {
    this.selectedChar = this.selectedChar || 'boy';
    this.startNewGame();
  }

  /* ---- FLASH EFFECT ---- */
  flashScreen(color='red') {
    const el = document.getElementById('overlay-flash');
    el.style.background = color === 'red' ? '#ff0000' : '#ffffff';
    el.style.opacity = '0.4';
    setTimeout(() => { el.style.opacity = '0'; }, 200);
  }

  /* ---- VICTORY ---- */
  triggerVictory() {
    this.gameStarted = false;
    this.audio.playVictory();
    this.showScreen(STATE.VICTORY);

    const timeUsed = this.totalTime - this.timeLeft;
    const mins = Math.floor(timeUsed/60), secs = Math.floor(timeUsed%60);
    document.getElementById('victory-stats').innerHTML =
      `⏱️ সময় লেগেছে: ${mins}:${secs.toString().padStart(2,'0')}<br>` +
      `✅ সঠিক উত্তর: ${this.correctAnswers}<br>` +
      `❌ ভুল উত্তর: ${this.wrongAnswers}<br>` +
      `🔮 গেট খোলা: ${this.gatesUnlocked}/8`;

    this.startVictoryAnim();
  }

  startVictoryAnim() {
    const vc = document.getElementById('victory-canvas');
    vc.width = window.innerWidth; vc.height = window.innerHeight;
    const ctx = vc.getContext('2d');
    let t = 0;
    const anim = () => {
      if (this.state !== STATE.VICTORY) return;
      t += 0.016;
      ctx.fillStyle = `rgba(0,10,5,0.15)`;
      ctx.fillRect(0, 0, vc.width, vc.height);
      // Stars/particles
      for (let i=0; i<3; i++) {
        const x = Math.random()*vc.width, y = Math.random()*vc.height;
        ctx.fillStyle = `hsl(${45+Math.random()*30},100%,${60+Math.random()*40}%)`;
        ctx.fillRect(x, y, 2, 2);
      }
      // Gold rays
      ctx.save();
      ctx.translate(vc.width/2, vc.height/2);
      for (let i=0; i<8; i++) {
        const angle = (i/8)*Math.PI*2 + t*0.3;
        const len = 200 + Math.sin(t*2+i)*50;
        ctx.strokeStyle = `rgba(245,197,66,${0.05+Math.sin(t+i)*0.03})`;
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(Math.cos(angle)*len, Math.sin(angle)*len);
        ctx.stroke();
      }
      ctx.restore();
      requestAnimationFrame(anim);
    };
    anim();
  }

  /* ---- GAME OVER ---- */
  triggerGameOver() {
    this.gameStarted = false;
    this.audio.playRoar();
    this.showScreen(STATE.GAMEOVER);

    document.getElementById('gameover-stats').innerHTML =
      `✅ সঠিক উত্তর: ${this.correctAnswers}<br>` +
      `❌ ভুল উত্তর: ${this.wrongAnswers}<br>` +
      `🔮 গেট খোলা: ${this.gatesUnlocked}/8`;

    this.startGameOverAnim();
  }

  startGameOverAnim() {
    const gc = document.getElementById('gameover-canvas');
    gc.width = window.innerWidth; gc.height = window.innerHeight;
    const ctx = gc.getContext('2d');
    let t = 0;
    const anim = () => {
      if (this.state !== STATE.GAMEOVER) return;
      t += 0.016;
      ctx.fillStyle = `rgba(5,0,0,0.08)`;
      ctx.fillRect(0,0,gc.width,gc.height);
      // Fire particles
      for (let i=0; i<5; i++) {
        const x = Math.random()*gc.width, y = gc.height - Math.random()*gc.height*0.4;
        ctx.fillStyle = `hsl(${Math.random()*30},100%,${40+Math.random()*30}%)`;
        const s = 2 + Math.random()*4;
        ctx.fillRect(x, y, s, s);
      }
      // Dragon eyes glow
      const eyeY = gc.height * 0.35;
      const eyeR = 8 + Math.sin(t*3)*3;
      [gc.width*0.42, gc.width*0.58].forEach(ex => {
        const grad = ctx.createRadialGradient(ex, eyeY, 0, ex, eyeY, eyeR*3);
        grad.addColorStop(0, `rgba(255,200,0,${0.6+Math.sin(t*5)*0.3})`);
        grad.addColorStop(0.5, `rgba(255,100,0,${0.3+Math.sin(t*3)*0.2})`);
        grad.addColorStop(1, 'rgba(255,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ex, eyeY, eyeR*3, 0, Math.PI*2);
        ctx.fill();
      });
      requestAnimationFrame(anim);
    };
    anim();
  }

  /* ============================================================
     RENDER
     ============================================================ */
  render() {
    const { ctx, canvas } = this;
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    if (this.state === STATE.INTRO) {
      this.renderIntroFrame(this.dragonAnimTimer);
      return;
    }

    if (![STATE.GAMEPLAY, STATE.QUESTION, STATE.PAUSED].includes(this.state)) return;

    // Camera shake
    const { sx, sy } = this.camera.getShakeOffset();
    ctx.save();
    ctx.translate(sx, sy);

    ctx.save();
    ctx.scale(this.camera.zoom, this.camera.zoom);
    ctx.translate(-Math.round(this.camera.x), -Math.round(this.camera.y));

    this.renderWorld();
    this.renderPlayer();
    this.particles.draw(ctx, this.camera.x * 0, this.camera.y * 0); // already translated

    ctx.restore(); // unscale + untranslate

    this.renderLighting(W, H);

    ctx.restore(); // unshake

    this.renderMinimap();
  }

  renderWorld() {
    const { ctx } = this;
    const camX = this.camera.x, camY = this.camera.y;
    const zoom = this.camera.zoom;
    const startCol = Math.max(0, Math.floor(camX / TS) - 1);
    const endCol   = Math.min(COLS-1, Math.ceil((camX + this.canvas.width/zoom) / TS) + 1);
    const startRow = Math.max(0, Math.floor(camY / TS) - 1);
    const endRow   = Math.min(ROWS-1, Math.ceil((camY + this.canvas.height/zoom) / TS) + 1);

    const region = getRegion(Math.floor(this.player.y/TS), Math.floor(this.player.x/TS));
    const t = Date.now() / 1000;

    for (let r = startRow; r <= endRow; r++) {
      for (let c = startCol; c <= endCol; c++) {
        const wx = c * TS, wy = r * TS;
        const tile = this.maze[r][c];

        if (tile === TILE.WALL) {
          this.drawWall(ctx, wx, wy, r, c, region);
        } else {
          this.drawFloor(ctx, wx, wy, r, c, region);

          if (tile === TILE.START) {
            ctx.fillStyle = 'rgba(0,255,100,0.15)';
            ctx.fillRect(wx, wy, TS, TS);
            ctx.fillStyle = '#2ecc71';
            ctx.font = `${TS*0.5}px serif`;
            ctx.textAlign = 'center';
            ctx.fillText('★', wx+TS/2, wy+TS*0.7);
          } else if (tile === TILE.EXIT) {
            const glow = this.gatesUnlocked >= 8;
            ctx.fillStyle = glow ? `rgba(245,197,66,${0.2+Math.sin(t*3)*0.1})` : 'rgba(100,100,100,0.15)';
            ctx.fillRect(wx, wy, TS, TS);
            ctx.font = `${TS*0.5}px serif`;
            ctx.textAlign = 'center';
            ctx.fillText(glow ? '🚪' : '🔒', wx+TS/2, wy+TS*0.7);
          } else if (tile >= GATE_TILE_BASE && tile < GATE_TILE_BASE+8) {
            this.drawGate(ctx, wx, wy, tile - GATE_TILE_BASE, t);
          } else if (tile === TILE.TORCH) {
            this.drawTorch(ctx, wx, wy, region, t);
          }
        }
      }
    }

    // Draw dragon in deep sections
    this.drawDragon(ctx, camX, camY);
  }

  drawWall(ctx, wx, wy, r, c, region) {
    const isDeep = r > ROWS * 0.6;
    const baseColor = isDeep ? '#1a0800' : (region.color || '#0a0a12');

    // Base wall
    ctx.fillStyle = baseColor;
    ctx.fillRect(wx, wy, TS, TS);

    // Stone texture with pixel art approach
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    if ((r+c) % 2 === 0) ctx.fillRect(wx, wy, TS/2, TS/2);
    if ((r+c) % 3 === 0) ctx.fillRect(wx+TS/2, wy+TS/2, TS/2, TS/2);

    // Wall edge highlight (top and left faces = lighter)
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(wx, wy, TS, 2);
    ctx.fillRect(wx, wy, 2, TS);

    // Dark edge (bottom and right)
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(wx, wy+TS-2, TS, 2);
    ctx.fillRect(wx+TS-2, wy, 2, TS);

    // Occasional moss/crack decoration
    if ((r*7+c*13) % 17 === 0) {
      ctx.fillStyle = 'rgba(30,80,30,0.5)';
      ctx.fillRect(wx+2, wy+TS-6, 4, 4);
    }
    if (isDeep && (r*3+c*11) % 19 === 0) {
      ctx.fillStyle = 'rgba(255,60,0,0.15)';
      ctx.fillRect(wx+TS/4, wy+TS/2, TS/2, TS/3);
    }
  }

  drawFloor(ctx, wx, wy, r, c, region) {
    const isDeep = r > ROWS*0.6;
    ctx.fillStyle = isDeep ? '#120600' : '#161622';
    ctx.fillRect(wx, wy, TS, TS);

    // Tile grid
    if ((r+c) % 2 === 0) {
      ctx.fillStyle = 'rgba(255,255,255,0.02)';
      ctx.fillRect(wx, wy, TS, TS);
    }

    // Occasional detail
    if ((r*5+c*7) % 23 === 0) {
      ctx.fillStyle = 'rgba(255,255,255,0.03)';
      ctx.fillRect(wx+TS/2-1, wy+TS/2-1, 3, 3);
    }
  }

  drawGate(ctx, wx, wy, gateId, t) {
    const gate = this.gates[gateId];
    if (!gate) return;

    if (gate.unlocked) {
      // Faded
      ctx.fillStyle = 'rgba(123,79,255,0.1)';
      ctx.fillRect(wx, wy, TS, TS);
      ctx.fillStyle = 'rgba(123,79,255,0.3)';
      ctx.font = `${TS*0.5}px serif`;
      ctx.textAlign = 'center';
      ctx.fillText('✦', wx+TS/2, wy+TS*0.7);
    } else {
      // Magical gate visual
      const pulse = 0.5 + Math.sin(t*3 + gateId)*0.5;
      ctx.fillStyle = `rgba(91,248,255,${0.08+pulse*0.12})`;
      ctx.fillRect(wx, wy, TS, TS);

      // Gate border
      ctx.strokeStyle = `rgba(123,79,255,${0.6+pulse*0.4})`;
      ctx.lineWidth = 2;
      ctx.strokeRect(wx+2, wy+2, TS-4, TS-4);

      // Inner glow
      ctx.fillStyle = `rgba(160,108,255,${0.3+pulse*0.2})`;
      ctx.fillRect(wx+4, wy+4, TS-8, TS-8);

      // Rune symbol
      ctx.fillStyle = `rgba(255,255,255,${0.7+pulse*0.3})`;
      ctx.font = `${TS*0.5}px serif`;
      ctx.textAlign = 'center';
      ctx.fillText('🔮', wx+TS/2, wy+TS*0.7);

      // Particles near gate
      if (Math.random() < 0.05) {
        this.particles.emitEmbers(wx+TS/2, wy+TS/2);
      }
    }
  }

  drawTorch(ctx, wx, wy, region, t) {
    const flicker = 0.8 + Math.sin(t*8+wx)*0.2;
    ctx.fillStyle = 'rgba(255,165,0,0.8)';
    ctx.fillRect(wx+TS/2-2, wy+4, 4, TS-8);
    ctx.fillStyle = `rgba(255,100,0,${flicker})`;
    ctx.fillRect(wx+TS/2-3, wy+2, 6, 6);
    // Light halo
    const grad = ctx.createRadialGradient(wx+TS/2, wy+TS/2, 0, wx+TS/2, wy+TS/2, TS);
    grad.addColorStop(0, `rgba(255,165,0,${0.15*flicker})`);
    grad.addColorStop(1, 'rgba(255,165,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(wx-TS/2, wy-TS/2, TS*2, TS*2);
  }

  drawDragon(ctx, camX, camY) {
    const t = Date.now() / 1000;
    const sleeping = this.tensionLevel < 0.8;
    const img = sleeping ? this.spriteImages.dragonSleep : this.spriteImages.dragonFire;
    if (!img) return;

    // Dragon sits in the deep corridor
    const dragonWorldX = (COLS * 0.6) * TS;
    const dragonWorldY = (ROWS - 4) * TS;

    // Only draw if vaguely on screen
    const { x: sx, y: sy } = this.camera.worldToScreen(dragonWorldX, dragonWorldY);
    // Check visibility (approx)
    const viewW = this.canvas.width / this.camera.zoom;
    const viewH = this.canvas.height / this.camera.zoom;
    if (dragonWorldX < camX - 300 || dragonWorldX > camX + viewW + 300) return;
    if (dragonWorldY < camY - 200 || dragonWorldY > camY + viewH + 200) return;

    const w = img.naturalWidth * 2, h = img.naturalHeight * 2;

    ctx.save();
    ctx.globalAlpha = 0.85 + Math.sin(t*0.5)*0.1; // breathing
    if (!sleeping) {
      ctx.shadowBlur = 30 * this.tensionLevel;
      ctx.shadowColor = '#ff4400';
    } else {
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#553300';
    }

    // Subtle breathing bob
    const bob = sleeping ? Math.sin(t * 0.8) * 4 : Math.sin(t * 2) * 2;
    ctx.drawImage(img, dragonWorldX - w/2, dragonWorldY - h/2 + bob, w, h);
    ctx.restore();
  }

  renderPlayer() {
    const { ctx, player, selectedChar, spriteImages } = this;
    const t = Date.now() / 1000;

    const spriteKey = player.moving
      ? (selectedChar === 'girl' ? 'girlrun' : 'boyrun')
      : (selectedChar === 'girl' ? 'girl' : 'boy');
    const img = spriteImages[spriteKey];

    const pw = TS * 1.2, ph = TS * 1.8;
    const px = player.x - pw/2;
    const py = player.y - ph + TS*0.2;

    // Shadow
    ctx.save();
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#000';
    ctx.ellipse(player.x, player.y + TS*0.1, pw*0.4, 4, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    if (player.facing === 'left') {
      ctx.translate(player.x * 2, 0);
      ctx.scale(-1, 1);
    }

    // Idle bob
    const bob = player.moving ? 0 : Math.sin(t*2)*2;

    if (img && img.naturalWidth) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img,
        player.facing === 'left' ? player.x + pw/2 : px,
        py + bob, pw, ph);
    } else {
      // Fallback: drawn character
      const cx = player.facing === 'left' ? player.x + pw/4 : player.x;
      ctx.fillStyle = selectedChar === 'girl' ? '#ff6699' : '#4488ff';
      ctx.fillRect(cx - TS*0.3, py + bob, TS*0.6, TS*0.8);
      ctx.fillStyle = '#ffcc99';
      ctx.fillRect(cx - TS*0.25, py + bob - TS*0.4, TS*0.5, TS*0.5);
    }

    ctx.restore();
  }

  renderLighting(W, H) {
    const { ctx } = this;
    const t = Date.now() / 1000;

    // Dark vignette overlay
    const grad = ctx.createRadialGradient(W/2, H/2, H*0.15, W/2, H/2, H*0.7);
    const alpha = 0.3 + this.tensionLevel * 0.35;
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, `rgba(0,0,0,${alpha})`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Tension red pulse
    if (this.tensionLevel > 0.6) {
      const pulseAlpha = (this.tensionLevel-0.6)/0.4 * 0.08 * (0.5+Math.sin(t*4)*0.5);
      ctx.fillStyle = `rgba(255,30,0,${pulseAlpha})`;
      ctx.fillRect(0, 0, W, H);
    }

    // Critical fire overlay
    if (this.tensionLevel > 0.9) {
      const fireAlpha = (this.tensionLevel-0.9)/0.1 * 0.15 * (0.5+Math.sin(t*8)*0.5);
      ctx.fillStyle = `rgba(255,60,0,${fireAlpha})`;
      ctx.fillRect(0, 0, W, H);
    }
  }

  /* ---- MINIMAP ---- */
  renderMinimap() {
    const { minimapCtx: ctx, minimapCanvas: mc } = this;
    const mw = mc.width, mh = mc.height;
    const tw = mw / COLS, th = mh / ROWS;

    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, mw, mh);

    for (let r=0; r<ROWS; r++) {
      for (let c=0; c<COLS; c++) {
        if (!this.exploredTiles.has(`${r},${c}`)) continue;
        const tile = this.maze[r][c];
        if (tile === TILE.WALL) {
          ctx.fillStyle = '#3a3a5a';
        } else if (tile >= GATE_TILE_BASE && tile < GATE_TILE_BASE+8) {
          const gateId = tile - GATE_TILE_BASE;
          ctx.fillStyle = this.gates[gateId]?.unlocked ? '#7b4fff' : '#5bf8ff';
        } else if (tile === TILE.EXIT) {
          ctx.fillStyle = '#f5c542';
        } else {
          ctx.fillStyle = '#1a1a2a';
        }
        ctx.fillRect(Math.floor(c*tw), Math.floor(r*th), Math.max(1, Math.ceil(tw)), Math.max(1, Math.ceil(th)));
      }
    }

    // Player dot
    const pc = this.player.x / TS, pr = this.player.y / TS;
    ctx.fillStyle = '#ff0';
    const dotW = Math.max(2, tw*1.5), dotH = Math.max(2, th*1.5);
    ctx.fillRect(Math.floor(pc*tw - dotW/2), Math.floor(pr*th - dotH/2), dotW, dotH);
  }

  /* ---- INTRO FRAME ---- */
  renderIntroFrame(t) {
    const ic = document.getElementById('intro-canvas');
    if (!ic) return;
    ic.width = window.innerWidth;
    ic.height = window.innerHeight;
    const ctx = ic.getContext('2d');
    const W = ic.width, H = ic.height;

    // Cave background
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#050508');
    grad.addColorStop(1, '#1a0500');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Stalactites
    ctx.fillStyle = '#1a1a2e';
    for (let i=0; i<12; i++) {
      const x = (i/12)*W + Math.sin(i)*30;
      const h = 40 + Math.sin(i*2)*30;
      ctx.beginPath();
      ctx.moveTo(x-15, 0);
      ctx.lineTo(x+15, 0);
      ctx.lineTo(x, h);
      ctx.fill();
    }

    // Dragon in background
    const dragonImg = this.spriteImages.dragonSleep;
    if (dragonImg) {
      const dw = Math.min(W*0.5, dragonImg.naturalWidth*1.5);
      const dh = dw * (dragonImg.naturalHeight / dragonImg.naturalWidth);
      ctx.save();
      ctx.globalAlpha = 0.6 + Math.sin(t*0.8)*0.1;
      ctx.shadowBlur = 30; ctx.shadowColor = '#ff4400';
      ctx.drawImage(dragonImg, W*0.5 - dw/2, H*0.35 - dh/2 + Math.sin(t*0.8)*5, dw, dh);
      ctx.restore();
    } else {
      // Fallback dragon
      ctx.save();
      ctx.fillStyle = `rgba(180,100,0,${0.4+Math.sin(t*0.8)*0.1})`;
      ctx.font = `${H*0.25}px serif`;
      ctx.textAlign = 'center';
      ctx.shadowBlur = 40; ctx.shadowColor = '#ff4400';
      ctx.fillText('🐉', W/2, H*0.5);
      ctx.restore();
    }

    // Ember particles
    if (Math.random() < 0.3) {
      const ex = W*0.3 + Math.random()*W*0.4;
      const ey = H*0.5 + Math.random()*H*0.2;
      this.particles.emitEmbers(ex, ey);
    }
    this.particles.update(0.016);
    this.particles.draw(ctx, 0, 0);

    // Title overlay gradient
    const titleGrad = ctx.createLinearGradient(0, H*0.7, 0, H);
    titleGrad.addColorStop(0, 'transparent');
    titleGrad.addColorStop(1, 'rgba(0,0,0,0.97)');
    ctx.fillStyle = titleGrad;
    ctx.fillRect(0, 0, W, H);
  }
}

/* ============================================================
   TITLE SCREEN CANVAS ANIMATION
   ============================================================ */
function animateTitleCanvas() {
  const tc = document.getElementById('title-canvas');
  if (!tc) return;
  const ctx = tc.getContext('2d');
  let t = 0;

  const stars = Array.from({length:80}, () => ({
    x: Math.random(), y: Math.random(),
    s: 0.5+Math.random()*2, b: Math.random()
  }));

  const frame = () => {
    if (!document.getElementById('screen-title').classList.contains('active')) {
      requestAnimationFrame(frame);
      return;
    }
    tc.width = window.innerWidth;
    tc.height = window.innerHeight;
    const W = tc.width, H = tc.height;
    t += 0.016;

    // Sky gradient
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#020208');
    grad.addColorStop(0.5, '#0a0a1e');
    grad.addColorStop(1, '#1a0500');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Stars
    stars.forEach(s => {
      const alpha = 0.4 + Math.sin(t*2+s.b*10)*0.4;
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fillRect(s.x*W, s.y*H*0.6, s.s, s.s);
    });

    // Ground silhouette
    ctx.fillStyle = '#050508';
    ctx.beginPath();
    ctx.moveTo(0, H*0.7);
    for (let x=0; x<=W; x+=20) {
      ctx.lineTo(x, H*0.7 + Math.sin(x*0.02+t*0.2)*15 + Math.sin(x*0.05)*8);
    }
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
    ctx.fill();

    // Dragon silhouette
    ctx.save();
    ctx.fillStyle = `rgba(80,30,0,${0.15+Math.sin(t*0.5)*0.05})`;
    ctx.font = `${H*0.3}px serif`;
    ctx.textAlign = 'center';
    ctx.shadowBlur = 40+Math.sin(t)*20;
    ctx.shadowColor = '#ff2200';
    ctx.fillText('🐉', W/2, H*0.5 + Math.sin(t*0.5)*10);
    ctx.restore();

    requestAnimationFrame(frame);
  };
  frame();
}

/* ============================================================
   BOOT
   ============================================================ */
let game;
window.addEventListener('DOMContentLoaded', () => {
  // Show loading screen
  document.getElementById('screen-loading').classList.add('active');
  document.getElementById('screen-loading').style.display = 'flex';

  // Small delay for dramatic effect
  setTimeout(() => {
    game = new DragonLabyrinth();
    animateTitleCanvas();
  }, 100);
});