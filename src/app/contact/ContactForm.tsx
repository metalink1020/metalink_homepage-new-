"use client";

import { useState } from "react";

const INQUIRY_TYPES = [
  { value: "AI", label: "AI" },
  { value: "SI·SM", label: "SI·SM" },
  { value: "마케팅", label: "마케팅" },
  { value: "ETC", label: "ETC (문자·PG/VAN·클라우드)" },
  { value: "기타", label: "기타 문의" },
];

const inputClass =
  "h-[50px] w-full rounded-[5px] border border-[#EBEBEB] px-4 text-[15px] outline-none transition focus:border-brand";

export default function ContactForm() {
  const [type, setType] = useState("AI");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const tel = String(data.get("tel") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const agree = data.get("agree");

    if (!agree) {
      alert("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }

    const subject = `[사업문의] ${type} - ${name}`;
    const body = [
      `이름: ${name}`,
      `연락처: ${tel}`,
      `이메일: ${email}`,
      `문의유형: ${type}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:help@mtlink.kr?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="c-name" className="mb-2 block text-sm font-bold text-[#222]">
          이름
        </label>
        <input id="c-name" name="name" type="text" required placeholder="이름을 입력해 주세요" className={inputClass} />
      </div>

      <div>
        <label htmlFor="c-tel" className="mb-2 block text-sm font-bold text-[#222]">
          연락처
        </label>
        <input id="c-tel" name="tel" type="tel" required placeholder="연락 가능한 전화번호를 입력해 주세요" className={inputClass} />
      </div>

      <div>
        <label htmlFor="c-email" className="mb-2 block text-sm font-bold text-[#222]">
          이메일
        </label>
        <input id="c-email" name="email" type="email" required placeholder="이메일 주소를 입력해 주세요" className={inputClass} />
      </div>

      <div>
        <label htmlFor="c-type" className="mb-2 block text-sm font-bold text-[#222]">
          문의유형
        </label>
        <select
          id="c-type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={`${inputClass} bg-white`}
        >
          {INQUIRY_TYPES.map((t) => (
            <option key={t.label} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-2 block text-sm font-bold text-[#222]">
          문의내용
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={6}
          required
          placeholder="문의하실 내용을 입력해 주세요"
          className="w-full rounded-[5px] border border-[#EBEBEB] p-4 text-[15px] leading-[24px] outline-none transition focus:border-brand"
        />
      </div>

      <label htmlFor="c-agree" className="flex items-center gap-2 text-sm text-[#666]">
        <input id="c-agree" name="agree" type="checkbox" required className="h-4 w-4 accent-brand" />
        개인정보 수집 및 이용에 동의합니다.
      </label>

      <button
        type="submit"
        className="mt-2 h-[52px] rounded-[30px] bg-brand text-base font-bold text-white transition hover:opacity-90"
      >
        문의하기
      </button>
      <p className="text-center text-sm text-[#999]">
        문의를 남겨주시면 담당자가 24시간 이내에 답변드립니다.
      </p>
    </form>
  );
}
