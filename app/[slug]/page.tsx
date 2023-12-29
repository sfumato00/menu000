import {menu} from "@/lib/menu";
import TileCard from "@/ui/tile-card";
import {notFound} from "next/navigation";

export default function Page({params}: { params: { slug: string } }) {

    const category = menu.find(category => category.slug === params.slug)

    if (!category) {
        notFound()
    }

    return (
        <div className="space-y-5 prose prose-sm prose-invert max-w-none">
            <h1 className="capitalize">{category?.name ?? ""}</h1>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {
                    category!.items.map((item) => (
                        <TileCard key={item.slug} item={item} href={`/items/${item.slug}`}/>
                    ))
                }
            </div>
        </div>

    );
}