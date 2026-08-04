import Image from "next/image";

export interface AddonServiceItem {
  icon: string;
  heading: string;
  body: string;
  bullets: string[];
}

export function AddonServiceGrid({ items }: { items: AddonServiceItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.heading}
          className="rounded-2xl border border-[#EBEBEB] p-8"
        >
          <Image
            src={item.icon}
            alt={item.heading}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <h3 className="mt-4 text-xl font-bold">{item.heading}</h3>
          <p className="mt-2 text-sm text-[#666]">{item.body}</p>
          <ul className="mt-3 space-y-1 text-sm text-[#222]">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-1.5">
                <span aria-hidden="true">-</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
