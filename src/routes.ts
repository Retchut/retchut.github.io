import Main from "./lib/Routes/Main.svelte";
// import Interests from "./lib/Routes/Interests.svelte";
import NotFound from "./lib/Routes/NotFound.svelte";

export default {
	// Exact path
	"/": Main,
	// "/interests": Interests,

	// This is optional, but if present it must be the last
	"*": NotFound,
};
