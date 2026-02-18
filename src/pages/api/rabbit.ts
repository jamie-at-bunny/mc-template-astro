import type { APIRoute } from 'astro';

const rabbitBreeds = [
	'Holland Lop',
	'Mini Rex',
	'Netherland Dwarf',
	'Lionhead',
	'Flemish Giant',
	'English Angora',
	'Dutch Rabbit',
	'Mini Lop',
	'Rex',
	'French Lop',
];

export const GET: APIRoute = () => {
	const randomIndex = Math.floor(Math.random() * rabbitBreeds.length);
	const breed = rabbitBreeds[randomIndex];

	return Response.json({ breed });
};
