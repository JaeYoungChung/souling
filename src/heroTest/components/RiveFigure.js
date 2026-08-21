import React, { useEffect, useRef } from 'react';
import { useRive } from '@rive-app/react-canvas';

// idle 애니메이션 길이 — 끝날 때마다 다시 fire해서 계속 움직이게 한다.
const IDLE_DURATION_MS = 4000;

// "이 유형의 또 다른 인물" — rive 파일 재생.
// src가 비어 있으면 부모(ResultPage)에서 아예 렌더하지 않는다.
function RiveFigure({ src, artboard, stateMachine }) {
  const { RiveComponent, rive } = useRive({
    src,
    artboard: artboard || undefined,
    stateMachines: stateMachine || undefined,
    autoplay: true,
  });

  const timeoutRef = useRef(null);

  // 스테이트 머신의 idle 트리거를 주기적으로 실행 (홈의 SoulingRive와 같은 패턴)
  useEffect(() => {
    if (!rive || !stateMachine) return undefined;

    const tryStart = setInterval(() => {
      const inputs = rive.stateMachineInputs(stateMachine);
      if (!inputs || inputs.length === 0) return;

      clearInterval(tryStart);
      const idle = inputs.find((i) => i.name === 'idle');
      if (!idle) return;

      const loop = () => {
        idle.fire();
        timeoutRef.current = setTimeout(loop, IDLE_DURATION_MS);
      };
      loop();
    }, 100);

    return () => {
      clearInterval(tryStart);
      clearTimeout(timeoutRef.current);
    };
  }, [rive, stateMachine]);

  return (
    <div className="ht-rive-figure">
      <RiveComponent />
    </div>
  );
}

export default RiveFigure;
