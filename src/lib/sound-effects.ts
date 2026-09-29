// Ultra-Modern Web Audio API Sound Synthesis Engine
// Designed for Luxury Architectural Experience
// Zero external files, zero latency, 100% synthesized, desktop-only

class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;
  private masterCompressor: DynamicsCompressorNode | null = null;
  private masterGain: GainNode | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("solar_sound_enabled");
      this.enabled = stored !== "false";

      // Global one-time unlock listener for browser audio policy (desktop user gestures)
      const unlockAudio = () => {
        if (!this.isMobile()) {
          this.initCtx();
        }
        window.removeEventListener("pointerdown", unlockAudio);
        window.removeEventListener("keydown", unlockAudio);
      };
      window.addEventListener("pointerdown", unlockAudio, { passive: true });
      window.addEventListener("keydown", unlockAudio, { passive: true });
    }
  }

  // Detect mobile view to strictly disable all audio functions and execution
  public isMobile(): boolean {
    if (typeof window === "undefined") return true;
    return (
      window.innerWidth < 768 ||
      ("ontouchstart" in window && !window.matchMedia("(hover: hover)").matches)
    );
  }

  private initCtx(): AudioContext | null {
    if (typeof window === "undefined" || this.isMobile()) return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        // Master Dynamics Limiter for velvety, non-harsh high-end audio
        this.masterCompressor = this.ctx.createDynamicsCompressor();
        this.masterCompressor.threshold.setValueAtTime(-14, this.ctx.currentTime);
        this.masterCompressor.knee.setValueAtTime(8, this.ctx.currentTime);
        this.masterCompressor.ratio.setValueAtTime(4, this.ctx.currentTime);
        this.masterCompressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
        this.masterCompressor.release.setValueAtTime(0.15, this.ctx.currentTime);

        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.85, this.ctx.currentTime);

        this.masterCompressor.connect(this.masterGain);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public isEnabled(): boolean {
    if (this.isMobile()) return false;
    return this.enabled;
  }

  public toggle(): boolean {
    if (this.isMobile()) return false;
    this.enabled = !this.enabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("solar_sound_enabled", String(this.enabled));
      window.dispatchEvent(
        new CustomEvent("solar-sound-changed", { detail: { enabled: this.enabled } })
      );
    }
    if (this.enabled) {
      this.initCtx();
      this.playChime();
    }
    return this.enabled;
  }

  public setEnabled(val: boolean) {
    if (this.isMobile()) return;
    if (this.enabled !== val) {
      this.toggle();
    }
  }

  // Helper to connect to master limiter
  private connectOutput(node: AudioNode) {
    if (this.masterCompressor) {
      node.connect(this.masterCompressor);
    } else if (this.ctx) {
      node.connect(this.ctx.destination);
    }
  }

  // 1. Amazing Crystalline Hover (Desktop Only):
  // High-frequency subtle glass tick with dual harmonic shimmer
  public playHover() {
    if (!this.enabled || this.isMobile()) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Primary crystalline tick
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1450, now);
      osc.frequency.exponentialRampToValueAtTime(2600, now + 0.035);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(2000, now);
      filter.Q.value = 3;

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc.connect(filter);
      filter.connect(gain);
      this.connectOutput(gain);

      osc.start(now);
      osc.stop(now + 0.055);
    } catch {
      // Ignore audio interruptions
    }
  }

  // 2. Primary CTA Click (Desktop Only):
  // Apple-grade physical haptic thump + mechanical tactile snap + golden resonance
  public playPrimaryClick() {
    if (!this.enabled || this.isMobile()) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // 1. Mechanical snap
      const snap = ctx.createOscillator();
      const snapGain = ctx.createGain();
      snap.type = "triangle";
      snap.frequency.setValueAtTime(820, now);
      snap.frequency.exponentialRampToValueAtTime(160, now + 0.04);
      snapGain.gain.setValueAtTime(0.12, now);
      snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      snap.connect(snapGain);
      this.connectOutput(snapGain);
      snap.start(now);
      snap.stop(now + 0.045);

      // 2. Sub-bass acoustic body
      const sub = ctx.createOscillator();
      const subGain = ctx.createGain();
      sub.type = "sine";
      sub.frequency.setValueAtTime(155, now);
      sub.frequency.exponentialRampToValueAtTime(42, now + 0.09);
      subGain.gain.setValueAtTime(0.16, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      sub.connect(subGain);
      this.connectOutput(subGain);
      sub.start(now);
      sub.stop(now + 0.095);

      // 3. Golden overtone ring
      const ring = ctx.createOscillator();
      const ringGain = ctx.createGain();
      ring.type = "sine";
      ring.frequency.setValueAtTime(1840, now);
      ringGain.gain.setValueAtTime(0.02, now);
      ringGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      ring.connect(ringGain);
      this.connectOutput(ringGain);
      ring.start(now);
      ring.stop(now + 0.125);
    } catch {
      // Ignore
    }
  }

  // 3. Secondary CTA Click (Desktop Only):
  // Holographic ethereal chime chord (F#5, A#5, C#6)
  public playSecondaryClick() {
    if (!this.enabled || this.isMobile()) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const notes = [739.99, 932.33, 1108.73]; // F#5, A#5, C#6 major triad

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + idx * 0.025;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.04, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.38);

        osc.connect(gain);
        this.connectOutput(gain);

        osc.start(startTime);
        osc.stop(startTime + 0.4);
      });
    } catch {
      // Ignore
    }
  }

  // 4. Card Hover Harmonic (Desktop Only):
  // Multi-voiced celestial scale with fundamental + octave shimmer
  public playCardHover(index: number = 0) {
    if (!this.enabled || this.isMobile()) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      // Pentatonic frequencies: C5, D5, E5, G5, A5
      const scale = [523.25, 587.33, 659.25, 783.99, 880.0];
      const freq = scale[index % scale.length];
      const now = ctx.currentTime;

      // Voice 1: Main tone
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(freq, now);
      gain1.gain.setValueAtTime(0.035, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
      osc1.connect(gain1);
      this.connectOutput(gain1);
      osc1.start(now);
      osc1.stop(now + 0.19);

      // Voice 2: Octave overtone shimmer
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(freq * 2, now + 0.01);
      gain2.gain.setValueAtTime(0.015, now + 0.01);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
      osc2.connect(gain2);
      this.connectOutput(gain2);
      osc2.start(now + 0.01);
      osc2.stop(now + 0.15);
    } catch {
      // Ignore
    }
  }

  // 5. Card Click (Desktop Only):
  // Precision tactile token click with physical resonance
  public playCardClick(index: number = 0) {
    if (!this.enabled || this.isMobile()) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const baseNotes = [261.63, 329.63, 392.0];
      const baseFreq = baseNotes[index % baseNotes.length];
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(baseFreq * 2.2, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.08);

      gain.gain.setValueAtTime(0.085, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      this.connectOutput(gain);

      osc.start(now);
      osc.stop(now + 0.11);
    } catch {
      // Ignore
    }
  }

  // 6. Badge Energy Surge (Desktop Only):
  // Harmonic solar sweep with dynamic resonant filter
  public playEnergySurge() {
    if (!this.enabled || this.isMobile()) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const sub = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(620, now + 0.24);

      sub.type = "sine";
      sub.frequency.setValueAtTime(70, now);
      sub.frequency.exponentialRampToValueAtTime(310, now + 0.24);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(320, now);
      filter.frequency.exponentialRampToValueAtTime(3600, now + 0.22);
      filter.Q.value = 6;

      gain.gain.setValueAtTime(0.055, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(filter);
      sub.connect(filter);
      filter.connect(gain);
      this.connectOutput(gain);

      osc.start(now);
      sub.start(now);
      osc.stop(now + 0.285);
      sub.stop(now + 0.285);
    } catch {
      // Ignore
    }
  }

  // 7. Menu Open / Dropdown (Desktop Only):
  // Silky smooth air swoosh
  public playMenuOpen() {
    if (!this.enabled || this.isMobile()) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.value = 2;

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

      osc.connect(filter);
      filter.connect(gain);
      this.connectOutput(gain);

      osc.start(now);
      osc.stop(now + 0.095);
    } catch {
      // Ignore
    }
  }

  // 8. General Click fallback
  public playClick() {
    this.playPrimaryClick();
  }

  // 9. Activation Chime (Desktop Only):
  // Warm welcoming celestial chord when unmuting
  public playChime() {
    if (this.isMobile()) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5 major chord

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + i * 0.04;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.045, start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.45);

        osc.connect(gain);
        this.connectOutput(gain);

        osc.start(start);
        osc.stop(start + 0.5);
      });
    } catch {
      // Ignore
    }
  }
}

export const sounds = new SoundEngine();
