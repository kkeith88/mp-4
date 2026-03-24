import Link from "next/link";
import { getBreedById } from "@/app/cats";

export default async function BreedPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
    const { id } = await params;
    let breed;

    try {
        breed = await getBreedById(id);
    } catch {
        return (
            <div className="error-page">
                <h1>Breed not found</h1>
                <p>We couldn't load this breed. The API may be down or your daily limit has been reached.</p>
                <Link href="/">← Back to all breeds</Link>
            </div>
        );
    }

    return (
        <div className="breed-detail">
            <Link href="/" className="back-link">
                ← All breeds
            </Link>
            <h1>{breed.name}</h1>
            <span>Breed Origin: {breed.origin}</span>
            <p>{breed.description}</p>
            <div>
                <div className="stat-box">
                    <p>Temperament</p>
                    <p>{breed.temperament}</p>
                </div>
                <div className="stat-box">
                    <p>Life Span</p>
                    <p>{breed.life_span} years</p>
                </div>
                <div className="stat-box">
                    <p>Weight</p>
                    <p>{breed.weight.imperial} lbs</p>
                </div>
            </div>
        </div>
    );
}
