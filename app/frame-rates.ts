export function frameRates(state: string): number {
  switch (state) {
    case 'i0': return 6;
    case 'i1': return 10;
    case 'i2': return 5;
    case 'i3': return 7;
    case 'i4': return 8;
    case 'i5': return 8;
    case 'i6': return 7;
    default: return 100;
  }
}
