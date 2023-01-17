const fs = require("fs");
const argv = require("minimist-lite")(process.argv.slice(2));

fs.readFile("./package.json", "utf8", (err, package) => {
  if (err) {
    console.error(err);
  }

  // Replace the package.json fields based on input
  const newPackage = package
    .replace("$extension_name", argv.name)
    .replace("$publisher_id", argv.pub)
    .replace("$repo", argv.repo)
    .replace("$display_name", argv.displayname)
    .replace("$author_name", argv.actor)
    .replace("$description", argv.desc);
  fs.writeFileSync("./package.json", newPackage, "utf8");
  fs.unlinkSync("./github/workflows/init.yml");
  fs.unlinkSync("./README.md");
  fs.unlinkSync("./init.js");
});
