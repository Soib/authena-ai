import Homepage from "~/pages/Homepage";

import { HydrateClient } from "~/trpc/server";

export default async function Home() {
	return (
		<HydrateClient>
			<Homepage />
		</HydrateClient>
	);
}
