
export function ItemDetailSkeleton() {
    return (
        <div className="space-y-5 prose prose-sm prose-invert max-w-none animate-pulse">
            <div className="capitalize h-6 bg-gray-300 rounded-md"></div>
            <div className="flex justify-center">
                <div className="h-72 w-72 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded-md"></div>
            <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
        </div>
    );
}

export default function TileCardSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="group block space-y-1.5 rounded-lg bg-gray-900 px-2 py-1">
                <div className="space-y-2 flex justify-center">
                    <div className="sm:block lg:block bg-gray-700 rounded-lg" style={{ height: '150px', width: '150px' }}></div>
                </div>
                <div className="h-4 bg-gray-700 rounded mt-2"></div>
                <div className="h-4 bg-gray-700 rounded mt-2 w-1/2"></div>
            </div>
        </div>
    );
}