import { useState, useEffect } from 'react';

const useValidityCSS = (isFieldDirty, isError) => {
  const [validityCSS, setValidityCSS] = useState('');

  const createValidityCSS = () => {
    if (isError) {
      setValidityCSS('focus:input-invalid input-invalid');
    } else if (isFieldDirty && !isError) {
      setValidityCSS('focus:input-valid input-valid');
    } else {
      setValidityCSS('');
    }
  };

  useEffect(() => {
    createValidityCSS();
  }, [isError]);

  return validityCSS;
};
export default useValidityCSS;
