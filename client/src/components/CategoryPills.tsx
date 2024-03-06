import { ChevronLeft } from "lucide-react"
import Button from "./shared/Button"

type CategoryPillProps = {
    selectedCategory: string
    onSelect: (category: string) => void
    categories: string[]
}

function CategoryPills({ selectedCategory, onSelect, categories }: CategoryPillProps) {
    return (
        <div className="overflow-x-hidden relative">
            <div className="flex gap-3 whitespace-nowrap transition-transform w-[max-cointent]">
                {categories.map((category) => {
                    return <Button key={category} onClick={() => onSelect(category)} className="py-1 px-2 rounded-lg whitespace-nowrap" variant={selectedCategory === category ? "dark" : "default"}> {category}</Button>
                })}
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-full aspect-square w-auto p-1.5">
                    <ChevronLeft />
                </Button>
            </div>

        </div>
    )
}

export default CategoryPills