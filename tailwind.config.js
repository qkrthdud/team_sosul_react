/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      // ✅ 사용자 정의 브레이크포인트
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
        "3xl": "1600px",
      },
      // ✅ 최대 너비
      maxWidth: {
        container: "1440px",
        container_full: "1800px",
      },
      // ✅ 사용자 색상
      colors: {
        main: "rgba(63, 66, 47, 1)",
        sub_ivory: "rgba(250, 245, 238, 1)",
        sub_apricot: "rgba(214, 139, 48, 1)",
        sub_panBlack: "rgba(51, 46, 42, 1)",
        black: "rgba(17, 17, 17, 1)",
        gray_1: "rgba(68, 68, 68, 1)",
        gray_2: "rgba(69, 69, 69, 1)",
        gray_3: "rgba(119, 119, 119, 1)",
        gray_4: "rgba(221, 221, 221, 1)",
        gray_5: "rgba(246, 246, 246, 1)", // grya_5 → gray_5로 오타 수정
        white: "rgb(255, 255, 255)",
      },
      // ✅ 폰트 패밀리
      fontFamily: {
        suit: ['"Suit"', 'sans-serif'],
      },
      // ✅ 폰트 사이즈 + 자간
      fontSize: {
        main_tit: ["2.125rem", { letterSpacing: "-0.1rem" }],
        sub_tit: ["1.5rem", { letterSpacing: "-0.1rem" }],
        list_tit: ["1.25rem", { letterSpacing: "-0.1rem" }],
        basic_txt: ["1rem", { letterSpacing: "-0.1rem" }],
        sub_txt: ["0.875rem", { letterSpacing: "-0.1rem" }],
        point_txt: ["0.75rem", { letterSpacing: "-0.1rem" }],
      },
    },
  },
  plugins: [],
}
