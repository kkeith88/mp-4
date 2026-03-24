import Link from "next/link";
import { getBreeds } from "@/app/cats";

export default async function HomePage() {
    let breeds;

    try {
        breeds = await getBreeds();
    } catch {
        return (
            <div className="error-page">
                <h1>Unable to load breeds</h1>
                <p>The Cat API may be down</p>
            </div>
        );
    }

    return (
        <>
            <h1>Cat Breeds</h1>
            <p style={{ textAlign: "center" }}>{ breeds.length} breeds from The Cat API</p>
            <div className="breeds-list">
                {breeds.map((breed) => (
                    <Link key={breed.id} href={`/breeds/${breed.id}`} className="breed-card">
                        <h2>{breed.name}</h2>
                        <p className="origin">📍 {breed.origin}</p>
                        <p>{breed.description}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}
