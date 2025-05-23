import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  // 페이지 진입 시 애니메이션 효과 적용
  useEffect(() => {
    // 페이지 요소들이 DOM에 추가된 후 애니메이션 클래스 추가
    const timer = setTimeout(() => {
      document.querySelector(".login-container")?.classList.add("show");
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const API_URL = `${import.meta.env.VITE_GOOGLE_URL}?client_type=electron`;

  const handleGoogleLogin = () => {
    window.location.href = API_URL;
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center text-white bg-[#181C22] overflow-hidden relative">
      {/* 파티클 요소들 */}
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />

      {/* 배경 그라데이션 애니메이션 */}
      <div className="bg-animate" />

      <div className="w-[63.7rem] h-[47.7rem] login-container opacity-0 transform translate-y-8 transition-all duration-700 ease-out flex flex-col justify-center items-center gap-[8rem] z-10">
        <img
          src="/logo.svg"
          alt="Morib 로고"
          className="w-[22.4rem] h-auto fade-in"
        />

        <div className="flex flex-col justify-center items-center gap-[6rem]">
          <h1 className="text-4xl text-center 2xl:text-8xl md:text-7xl sm:text-6xl font-bold whitespace-pre-line leading-130 slide-in">
            {"시간을 소중히 여긴다면,\n모립과 함께 집중해보세요"}
          </h1>

          {/* 버튼 - 피그마 기준 비율 유지 */}

          <button
            type="button"
            className="w-[39.5rem] cursor-pointer subhead-bold-20 fade-in-up"
            onClick={handleGoogleLogin}
          >
            <img src="/google_login.svg" alt="구글 로그인 버튼" />
          </button>
        </div>
      </div>
    </div>
  );
}
