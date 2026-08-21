import React from 'react';

// 5단계 라디오 — 양 끝이 크고 가운데로 갈수록 작아지는 심리테스트 형태.
// 왼쪽 끝 "아니다"(1점) / 오른쪽 끝 "그렇다"(5점)
// 좁은 화면에서는 vw 기준으로 줄어들어 한 줄에 항상 들어간다.
const SIZES = [
  'clamp(40px, 12vw, 56px)',
  'clamp(32px, 9.6vw, 45px)',
  'clamp(24px, 7vw, 34px)',
  'clamp(32px, 9.6vw, 45px)',
  'clamp(40px, 12vw, 56px)',
];

function ScaleInput({ value, onSelect, noLabel, yesLabel, disabled }) {
  return (
    <div className="ht-scale" role="radiogroup" aria-label={`${noLabel} — ${yesLabel}`}>
      <span className="ht-scale-label ht-scale-label--no">{noLabel}</span>
      <div className="ht-scale-dots">
        {[1, 2, 3, 4, 5].map((v, i) => (
          <button
            key={v}
            type="button"
            role="radio"
            aria-checked={value === v}
            aria-label={`${v}`}
            disabled={disabled}
            className={[
              'ht-scale-dot',
              v <= 2 ? 'ht-scale-dot--no' : v >= 4 ? 'ht-scale-dot--yes' : 'ht-scale-dot--mid',
              value === v ? 'is-selected' : '',
            ].join(' ')}
            style={{ '--dot-size': SIZES[i] }}
            onClick={() => onSelect(v)}
          />
        ))}
      </div>
      <span className="ht-scale-label ht-scale-label--yes">{yesLabel}</span>
    </div>
  );
}

export default ScaleInput;
