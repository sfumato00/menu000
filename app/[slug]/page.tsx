import {Item, menu} from "@/lib/menu";
import TileCard from "@/ui/tile-card";

export default function Page({params}: { params: { slug: string } }) {

    const items = menu.filter(category => category.slug === params.slug).pop()?.items ?? [];
    return (
        <div className="prose prose-sm prose-invert">
            <h1 className="capitalize">{params.slug}</h1>
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