const BASE_URL = "https://api.thecatapi.com/v1";

function getHeaders() {
    return { "x-api-key": process.env.CAT_API_KEY! };
}

export type Breed = {
    id: string;
    name: string;
    description: string;
    temperament: string;
    origin: string;
    life_span: string;
    weight: { imperial: string;};
};

export async function getBreeds(): Promise<Breed[]> {
    const res = await fetch(`${BASE_URL}/breeds`, {
        headers: getHeaders(),
    });

    if (!res.ok) throw new Error(`Failed to fetch breeds (${res.status})`);
    return res.json();
}

export async function getBreedById(id: string): Promise<Breed> {
    const res = await fetch(`${BASE_URL}/breeds/${id}`, {
        headers: getHeaders(),
    });

    if (!res.ok) throw new Error(`Failed to fetch breed (${res.status})`);
    return res.json();
}
