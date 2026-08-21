import React from 'react';

function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="ht-progress">
      <div className="ht-progress-track">
        <div className="ht-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="ht-progress-count">
        {current} / {total}
      </span>
    </div>
  );
}

export default ProgressBar;
