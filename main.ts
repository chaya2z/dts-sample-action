import { Octokit } from "https://esm.sh/octokit?dts";

const main = async () => {
  // authentication
  const octokit = new Octokit({
    auth: Deno.env.get("GITHUB_TOKEN"),
  });

  // get user
  const { data: { login } } = await octokit.rest.users.getAuthenticated();

  return login;
};

if (import.meta.main) {
  const user  = await main();
  console.log(user);

  Deno.exit();
}
