import { getEntry } from 'astro:content';
import type { APIContext } from 'astro';
import { getProjects } from '~/utils/collection';
import { postOpenGraph } from '~/utils/openGraphImage';

export async function getStaticPaths() {
	return (await getProjects()).map((project) => ({
		params: { slug: project.slug },
	}));
}

export const GET = async ({ params }: APIContext) => {
	const project = await getEntry('projects', params.slug as string);
	return new Response(
		await postOpenGraph({
			title: project?.data.title ?? '',
			description: project?.data.description,
			tags: project?.data.tags,
		}),
		{
			headers: { 'content-type': 'image/png' },
		},
	);
};
