import React, { useEffect, useState } from 'react';

// 마지막 문항과 결과 사이 2~3초 연출.
// 문구가 순차적으로 바뀌며 기대감을 만든다. (계산 자체는 즉시 끝나 있음)
function LoadingOverlay({ messages }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= messages.length - 1) return undefined;
    const timer = setTimeout(() => setStep((s) => s + 1), 850);
    return () => clearTimeout(timer);
  }, [step, messages.length]);

  return (
    <div className="ht-loading" role="status">
      <div className="ht-loading-orb">
        <div className="ht-loading-orb-core" />
        <div className="ht-loading-orb-ring" />
        <div className="ht-loading-orb-ring ht-loading-orb-ring--2" />
      </div>
      <p className="ht-loading-message" key={step}>
        {messages[step]}
      </p>
    </div>
  );
}

export default LoadingOverlay;
