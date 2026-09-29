// Audio ambient synthesis using Web Audio API for vintage newspaper atmosphere
let audioCtx: AudioContext | null = null;
let noiseNode: AudioBufferSourceNode | null = null;
let gainNode: GainNode | null = null;

export function toggleVintageAmbient(enable: boolean): boolean {
  if (enable) {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      // Generate 5 seconds of soft brown noise mixed with vinyl crackles
      const bufferSize = audioCtx.sampleRate * 5;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = buffer.getChannelData(0);

      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Brown noise filtering
        lastOut = (lastOut + (0.02 * white)) / 1.02;
        // Vinyl crackle spikes
        const crackle = Math.random() > 0.998 ? (Math.random() - 0.5) * 0.4 : 0;
        output[i] = (lastOut * 0.05) + crackle;
      }

      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = buffer;
      noiseNode.loop = true;

      // Lowpass filter to dampen harsh frequencies
      const biquad = audioCtx.createBiquadFilter();
      biquad.type = 'lowpass';
      biquad.frequency.value = 1200;

      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);

      noiseNode.connect(biquad);
      biquad.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      noiseNode.start();
      return true;
    } catch {
      return false;
    }
  } else {
    if (noiseNode) {
      try {
        noiseNode.stop();
        noiseNode.disconnect();
      } catch {
        // ignore
      }
      noiseNode = null;
    }
    return false;
  }
}
