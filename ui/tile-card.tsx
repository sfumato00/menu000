import Link from "next/link";
import Image from "next/image";
import {Item} from "@/lib/definitions";

export default function TileCard({item, href}: { item: Item, href: string }) {

    return (
        <div>
            <Link
                href={href}
                className="group block space-y-1.5 rounded-lg bg-gray-900 px-2 py-1 hover:bg-gray-800"
            >
                <div className="space-y-2 flex justify-center">
                    <Image
                        src={`/${item.slug}.jpg`}
                        className="sm:block rounded-lg lg:block"
                        alt={item.name}
                        height={150}
                        width={150}
                    />
                </div>
                <div>
                    {item.name}
                </div>
                <div>
                    Cal. {item.calorie}
                </div>
            </Link>
        </div>
    );
}