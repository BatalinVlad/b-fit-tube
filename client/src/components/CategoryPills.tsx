import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./shared/Button";
import { useRef, useState } from "react";

type CategoryPillProps = {
  selectedCategory: string;
  onSelect: (category: string) => void;
  categories: string[];
};

const TRANSLATE_AMOUNT = 200;

function CategoryPills({
  selectedCategory,
  onSelect,
  categories,
}: CategoryPillProps) {
  const [translate, setTranslate] = useState(300);
  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-x-hidden relative">
      <div
        ref={containerRef}
        className="flex gap-3 whitespace-nowrap transition-transform w-[max-cointent]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => {
          return (
            <Button
              key={category}
              onClick={() => onSelect(category)}
              className="py-1 px-2 rounded-lg whitespace-nowrap"
              variant={selectedCategory === category ? "dark" : "default"}
            >
              {category}
            </Button>
          );
        })}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="flex justify-end absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}

export default CategoryPills;
