export interface FlamencoStep {
  compasBeat: number; // 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
  isAccented: boolean;
  defaultDynamic: number; // 0-127
  rasgueadoTrigger: boolean;
}

// Corrected 12-Beat Compás mapping for Bulerías (accenting 12, 3, 6, 8, 10)
export const buleriasCompasGrid: FlamencoStep[] = [
  { compasBeat: 12, isAccented: true,  defaultDynamic: 120, rasgueadoTrigger: true },
  { compasBeat: 1,  isAccented: false, defaultDynamic: 65,  rasgueadoTrigger: false },
  { compasBeat: 2,  isAccented: false, defaultDynamic: 60,  rasgueadoTrigger: false },
  { compasBeat: 3,  isAccented: true,  defaultDynamic: 115, rasgueadoTrigger: false },
  { compasBeat: 4,  isAccented: false, defaultDynamic: 60,  rasgueadoTrigger: false },
  { compasBeat: 5,  isAccented: false, defaultDynamic: 65,  rasgueadoTrigger: false },
  { compasBeat: 6,  isAccented: true,  defaultDynamic: 110, rasgueadoTrigger: true },
  { compasBeat: 7,  isAccented: false, defaultDynamic: 60,  rasgueadoTrigger: false },
  { compasBeat: 8,  isAccented: true,  defaultDynamic: 115, rasgueadoTrigger: false },
  { compasBeat: 9,  isAccented: false, defaultDynamic: 60,  rasgueadoTrigger: false },
  { compasBeat: 10, isAccented: true,  defaultDynamic: 125, rasgueadoTrigger: true },
  { compasBeat: 11, isAccented: false, defaultDynamic: 50,  rasgueadoTrigger: false },
];
