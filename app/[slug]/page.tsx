import {menu} from "@/lib/menu";
import TileCard from "@/ui/tile-card";

export default function Page({params}: { params: { slug: string } }) {

    const category = menu.find(category => category.slug === params.slug)
    const items = category?.items ?? [];

    return (
        <div className="space-y-5 prose prose-sm prose-invert max-w-none">
            <h1 className="capitalize">{category?.name ?? ""}</h1>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-7">
                {
                    items.map((item) => (
                        <TileCard key={item.slug} item={item} href={`/items/${item.slug}`}/>
                    ))
                }
            </div>
        </div>

    );
}