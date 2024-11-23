import { Button } from "@/shared/ui/button";
import { X } from "lucide-react";

interface FilterButtonProps {
  filter: string;
  isSelected: boolean;
  onClick: () => void;
  onRemove?: (event: React.MouseEvent) => void;
  isRemovable?: boolean;
  className?: string;
}

export default function FilterButton({
  filter,
  isSelected,
  onClick,
  onRemove,
  isRemovable = false,
  className = "",
}: FilterButtonProps) {
  return (
    <Button
      variant={isSelected ? "secondary" : "outline"}
      className={`rounded-lg whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {filter}
      {isRemovable && onRemove && (
        <X
          className="ml-2 h-4 w-4 cursor-pointer"
          onClick={(event) => {
            event.stopPropagation();
            onRemove(event);
          }}
        />
      )}
    </Button>
  );
}
