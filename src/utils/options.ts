import { Category } from "../types/games";
import { OptionsType } from "../types/options";

export const filterListOptions: OptionsType<Category>[] = [
    { label: "MMORPG", value: "mmorpg" },
    { label: "Moba", value: "moba" },
    { label: "Racing", value: "racing" },
    { label: "Shooter", value: "shooter" },
    { label: "Social", value: "social" },
    { label: "Sports", value: "sports" },
    { label: "Strategy", value: "strategy" },
]