import { Octokit } from "https://esm.sh/octokit?dts";

const main = async () => {
  // authentication
  const octokit = new Octokit({
    auth: Deno.env.get("GITHUB_TOKEN"),
  });

  console.log(await octokit.rest.emojis.get());
};

if (import.meta.main) {
  await main();
  Deno.exit();
}
