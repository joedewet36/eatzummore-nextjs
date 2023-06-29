import { useMemo } from 'react';

const useSvgSizing = (baseWidth: number, baseHeight: number, scale = 1): Array<number> => {
  return useMemo(() => {
    return [baseHeight * scale, baseWidth * scale];
  }, [baseHeight, baseWidth, scale]);
};

export default useSvgSizing;
