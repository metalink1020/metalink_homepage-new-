"use client";

import Script from "next/script";

declare global {
  interface Window {
    WebChat?: new (options: { botId: string; locale: string }) => unknown;
  }
}

/**
 * 서티라이프(certi.life) 웹챗 플로팅 위젯.
 * SDK 로드 후 WebChat 인스턴스를 생성해 우측 하단에 챗봇 버튼을 띄운다.
 */
export default function ChatbotWidget() {
  return (
    <Script
      id="webchatSDK"
      src="https://webchat.certi.life/sdk/webchat.sdk.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== "undefined" && window.WebChat) {
          new window.WebChat({
            botId: "698574b0b4ceb60afbae1aa9",
            locale: "ko",
          });
        }
      }}
    />
  );
}
