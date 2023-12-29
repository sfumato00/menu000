import {Item} from '@/lib/menu';
import Link from "next/link";
import Image from "next/image";

export default function TileCard({item, href}: { item: Item, href: string }) {

    return (
        <div>
            <Link
                href={href}
                // className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
            >
                {/*<div className="font-medium text-gray-200 group-hover:text-gray-50">*/}
                {/*    {item.name}*/}
                {/*</div>*/}
                <div className="space-y-2">
                    <Image
                        src={`/${item.slug}.jpg`}
                        className="sm:block rounded-lg lg:block"
                        alt={item.name}
                        height={150}
                        width={150}
                    />
                </div>

                {/*{item.description ? (*/}
                {/*    <div*/}
                {/*        className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">*/}
                {/*        {item.description}*/}
                {/*    </div>*/}
                {/*) : null}*/}
            </Link>
        </div>
    );
}