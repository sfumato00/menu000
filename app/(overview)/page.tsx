import {menu} from '@/lib/menu';
import TileCard from "@/ui/tile-card";

export default function Page() {
    return (
        <div className="space-y-8 prose prose-sm prose-invert max-w-none">
            <h1 className="capitalize">Our Menu</h1>
            <div className="space-y-10">
                {menu.map(({items, name, slug}) => {
                    return (
                        <div key={slug} className="space-y-5">
                            <h2 className="prose prose-sm prose-invert">
                                {name}
                            </h2>
                            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
