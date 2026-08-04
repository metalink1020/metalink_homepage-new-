export interface CaseItem {
  client: string;
  project: string;
  desc: string;
}

export function CaseList({ items }: { items: CaseItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
      {items.map((item) => (
        <div
          key={item.client}
          className="flex flex-col rounded-2xl border border-[#EBEBEB] bg-white p-8"
        >
          <div className="text-lg font-bold text-brand">{item.client}</div>
          <div className="mt-2 min-h-[48px] text-balance text-base font-semibold leading-[24px] text-[#222]">
            {item.project}
          </div>
          <p className="mt-4 text-pretty text-[15px] leading-[26px] text-[#666]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
