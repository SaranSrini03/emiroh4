import { useRef, useState } from "react";
import { Section } from "@/data/imports";
import { TOP_CONTENT_COUNT, TOP_CONTENT_SECTION_TITLE } from "@/data/globaldata";
import { ChevronLeft, ChevronRight,Pause } from "lucide-react";

export default function TopPerformingContent() {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = TOP_CONTENT_COUNT * 2;

  const scrollToIndex = (index: number) => {
    const safeIndex = ((index % itemCount) + itemCount) % itemCount;
    setCurrentIndex(safeIndex);
    const container = galleryRef.current;
    if (!container) return;
    const child = container.children[safeIndex] as HTMLElement | undefined;
    if (child) child.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const handlePrev = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);
  const handleScroll = () => {
    const container = galleryRef.current;
    if (!container) return;
    const { scrollLeft } = container;
    let nearestIdx = 0;
    let minDelta = Number.POSITIVE_INFINITY;
    for (let i = 0; i < container.children.length; i++) {
      const el = container.children[i] as HTMLElement;
      const delta = Math.abs(el.offsetLeft - scrollLeft);
      if (delta < minDelta) {
        minDelta = delta;
        nearestIdx = i;
      }
    }
    if (nearestIdx !== currentIndex) setCurrentIndex(nearestIdx);
  };

  return (
    <Section title={
      <div className="flex items-center justify-between">
        <div className="text-left">{TOP_CONTENT_SECTION_TITLE}</div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="rounded-full bg-white px-3 py-1 text-neutral-900 shadow-sm ring-1 ring-black/5"
          >
            <ChevronLeft className="w-6 h-10" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full bg-black   px-3 py-1 text-white shadow-sm ring-1 ring-rose-200"
          >
            <ChevronRight className="w-6 h-10 " />
          </button>
        </div>
      </div>
    } className="mt-6">
      <div className="mb-3 flex items-center gap-2 text-sm">
        {['Reels', 'Posts'].map((label, idx) => (
          <button
            key={label}
            className={`rounded-full bg-${idx === currentIndex ? 'rose-100' : 'neutral-100'} px-3 py-1 ${
              idx === currentIndex ? 'text-rose-700 font-semibold' : 'text-neutral-700'
            }`}
            onClick={() => scrollToIndex(idx)}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        ref={galleryRef}
        onScroll={handleScroll}
        className="flex -mx-2 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
      >
        {new Array(itemCount).fill(0).map((_, idx) => (
          <div key={idx} className="px-2 snap-start shrink-0 basis-1/4">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&auto=format&q=60&sig=${idx}`}
                alt={`content-${idx}`}
                className="aspect-[3/4] w-full object-cover transition-transform group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-3 text-xs text-white">
                <span>Leslie Alexander</span>
                <div className="relative inline-block w-[30px] h-[30px]">
                  <Pause className="absolute inset-0 h-full w-full " />
                  <div className="absolute top-[-7px] left-[-7px] w-full h-full p-5 border-2 border-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
