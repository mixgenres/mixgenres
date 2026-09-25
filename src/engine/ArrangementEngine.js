function generateTiming(notes, genre = '', grooveTemplate = null) {
  // Computed once for the phrase/fragment: maps the 'pocket' and microalignments
  const grooveMap = computeGrooveMap(genre, grooveTemplate);
  
  return notes.map(note => {
    const beatPhase = (note.quantizedTime !== undefined ? note.quantizedTime : note.time || 0) % 4; // Standardized measure phase
    const microOffset = grooveMap.timingOffset(beatPhase);
    const humanizeVelocity = grooveMap.velocityCurve(beatPhase);
    
    // Handle phrasing repetition paradigms based on genre context
    const phraseRepetition = computePhraseRepetition(genre, note.measure || note.bar || 0);
    
    return { 
      ...note, 
      time: (note.quantizedTime !== undefined ? note.quantizedTime : note.time || 0) + microOffset + phraseRepetition.timingDrift, 
      velocity: Math.max(0.1, Math.min(1.0, (note.velocity || 1.0) * humanizeVelocity * phraseRepetition.dynamics)),
      articulation: phraseRepetition.articulation || note.articulation
    };
  });
}

function computeGrooveMap(genre = '', template = null) {
  const genreLower = String(genre).toLowerCase();
  // Simulates how musicians inherently feel the pocket per genre
  const isSwing = genreLower.includes('jazz') || genreLower.includes('blues');
  const isDilla = genreLower.includes('lofi') || genreLower.includes('hiphop') || genreLower.includes('hip_hop');
  
  return {
    timingOffset: (beat) => {
      if (isDilla) return (beat % 1 !== 0) ? 0.03 : -0.015; // Laid back off-beats
      if (isSwing) return (beat % 1 !== 0) ? 0.08 : 0; // Swung subdivisions
      return (Math.random() * 0.006 - 0.003); // Subtle human micro-drift
    },
    velocityCurve: (beat) => {
      return (beat % 1 === 0) ? 1.05 : 0.85 + (Math.random() * 0.1); // Dynamic downbeat emphasis
    }
  };
}

function computePhraseRepetition(genre = '', measure = 0) {
  const genreLower = String(genre).toLowerCase();
  // Governs how phrasing evolves: e.g., Jazz plays a phrase once then deviates/ghosts
  const isJazz = genreLower.includes('jazz');
  if (isJazz && measure > 4) {
    return { timingDrift: Math.random() * 0.02, dynamics: 0.85, articulation: 'ghost' };
  }
  return { timingDrift: 0, dynamics: 1.0, articulation: 'normal' };
}

function compileTracks(tracks = [], genre = '') {
  // Pre-compute band interactions (the 'listening' phase) natively at the base layer
  const interactionMap = computeBandInteractions(tracks);
  
  return tracks.map(track => {
    const updatedNotes = (track.notes || []).map(note => {
      const interaction = interactionMap.getEventAt(note.time);
      if (interaction) {
        // Band members adjust their performance to each other
        if ((track.role === 'bass' || track.id === 'bass') && interaction.drumFill) {
          note.velocity = (note.velocity || 1.0) * 0.85;
          if ((note.duration || note.dur || 0) < 0.25) note.muted = true; // Bassist gives the drummer space
        }
        if ((track.role === 'chords' || track.role === 'comp' || track.role === 'harmony') && interaction.vocalBelt) {
          note.velocity = (note.velocity || 1.0) * 0.7;
          note.timbreShift = -0.3; // Comping instruments darken timbre during vocal peaks
        }
      }
      return note;
    });
    return renderTrack({ ...track, notes: updatedNotes });
  });
}

function computeBandInteractions(tracks = []) {
  const events = [];
  const drums = tracks.find(t => t.role === 'drums' || t.id === 'drums');
  const vocals = tracks.find(t => t.role === 'lead' || t.role === 'vocals' || t.id === 'lead');
  
  if (drums && drums.notes) {
    drums.notes.forEach(n => {
      if (n.isFill || n.articulation === 'fill') events.push({ time: n.time, drumFill: true });
    });
  }
  if (vocals && vocals.notes) {
    vocals.notes.forEach(n => {
      const vel = n.velocity !== undefined ? n.velocity : (n.vel !== undefined ? n.vel / 127 : 0.8);
      const dur = n.duration !== undefined ? n.duration : (n.dur !== undefined ? n.dur : 0.5);
      if (vel > 0.85 && dur > 1.2) {
        events.push({ time: n.time, vocalBelt: true });
      }
    });
  }
  return {
    getEventAt: (time) => events.find(e => Math.abs(e.time - time) < 0.4)
  };
}

function renderTrack(track) {
  return track;
}

export {
  generateTiming,
  computeGrooveMap,
  computePhraseRepetition,
  compileTracks,
  computeBandInteractions,
  renderTrack
};
