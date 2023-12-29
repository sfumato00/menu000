export default function Page({params}: { params: { slug: string } }) {
    console.log(params.slug);
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    )
}