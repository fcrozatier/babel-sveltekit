<script lang="ts">
	import { hello } from '@babel-sveltekit/hello-pkg';

	function hello2(name?: { value?: string[] }) {
		return `Hey ${name?.value?.at(-1) ?? 'Bob'}`;
	}
</script>

<h1>{hello()}</h1>
<h1>{hello2()}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
