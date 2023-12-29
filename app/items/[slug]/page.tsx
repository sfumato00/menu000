"use client";

import {menu} from "@/lib/menu";
import {Item} from "@/lib/definitions";
import Image from "next/image";
import {useEffect, useState} from "react";
import {ItemDetailSkeleton} from "@/ui/skeletons";
import {notFound} from "next/navigation";

export default function Page({params}: { params: { slug: string } }) {

    const [loading, setLoading] = useState(true);
    const findItem = (): Item => {
        for (const category of menu) {
            const item = category.items.find(item => item.slug === params.slug);
            if (item) {
                return item;
            }
        }
        notFound();
    }

    const item = findItem();

    useEffect(() => {
        if (item) {
            setLoading(false);
        }
    }, [item]);

    if (loading) {
        return <ItemDetailSkeleton/>
    }

    return (
        <div className="space-y-5 prose prose-sm prose-invert max-w-none">
            <h1 className="capitalize">{item.name}</h1>
            <div className="flex justify-center">
                <Image
                    src={`/${item.slug}.jpg`}
                    className="sm:block rounded-lg lg:block"
                    alt={item.name}
                    height={300}
                    width={300}
                />
            </div>
            <div>Cal. <span className="font-extrabold">{item.calorie}</span></div>
            <div>
                {item.description}
            </div>
        </div>
    )
}