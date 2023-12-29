export default function Page({params}: { params: { slug: string } }) {
    return (
        <div className="prose prose-sm prose-invert">
            <h1 className="capitalize">{params.slug}</h1>
        </div>
    )
}