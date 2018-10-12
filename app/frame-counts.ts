export function frameCounts(state: string): number {
  switch (state) {
    case 'i0': return 8;
    case 'i1': return 16;
    case 'i2': return 7;
    case 'i3': return 12;
    case 'i4': return 13;
    case 'i5': return 11;
    case 'i6': return 11;
    default: return 0;
  }
}
