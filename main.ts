const main = () => {
  console.log(Deno.env.get("GITHUB_TOKEN"))
};

if (import.meta.main) {
  main();
}
