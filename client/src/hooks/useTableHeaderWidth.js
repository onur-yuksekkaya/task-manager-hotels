import { useState, useEffect } from 'react';

const unit = '%';

const useTableHeaderWidth = (tableHeaders, headerWidths) => {
  const [widths, setWidths] = useState(headerWidths);

  const divideWidthUnits = (totalSize, fraction) => {
    return `${(totalSize / fraction).toFixed()}`;
  };

  const createHeaderWidths = () => {
    const tableHeaderCount = tableHeaders.length;
    const headerWidthsCount = headerWidths.length;

    if (tableHeaderCount === headerWidthsCount) {
      setWidths(headerWidths.map((widthItem) => `${widthItem}`));
    } else if (tableHeaderCount > headerWidthsCount && headerWidthsCount > 0) {
      const emptySpaceCount = tableHeaders.length - headerWidths.length;
      const totalWidth = headerWidths.reduce(
        (prevSize, curSize) => prevSize + curSize
      );
      const widthLeft = 100 - totalWidth;

      if (widthLeft <= 0) {
        setWidths(
          Array(tableHeaderCount).fill(
            divideWidthUnits(100, tableHeaders.length)
          )
        );
      } else {
        const unitDivided = divideWidthUnits(widthLeft, emptySpaceCount);
        setWidths((prevArray) => [
          ...prevArray.map((widthItem) => `${widthItem}`),
          ...Array(emptySpaceCount).fill(unitDivided),
        ]);
      }
    } else {
      setWidths(
        Array(tableHeaderCount).fill(divideWidthUnits(100, tableHeaders.length))
      );
    }
  };

  useEffect(() => {
    createHeaderWidths();
  }, [tableHeaders]);

  return [widths, unit];
};
export default useTableHeaderWidth;
