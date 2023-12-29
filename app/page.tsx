import {menu} from '@/lib/menu';
import TileCard from "@/ui/tile-card";

export default function Page() {
    return (
        <div className="space-y-8">
            <h1 className="prose prose-sm prose-invert">Our Menu</h1>

            <div className="space-y-10 text-white">
                {menu.map(({items, name, slug}) => {
                    return (
                        <div key={slug} className="space-y-5">
                            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                {name}
                            </div>
                            <div className="grid grid-cols-2 gap-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-7">
                                {
                                    items.map((item) => (
                                        <TileCard key={item.name} item={item} href={`/items/${item.slug}`}/>
                                    ))
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
