module.exports = function (plop) {
  plop.setPartial("packageName", "{{technology}}-{{chapter}}-{{challenge}}");

  plop.setGenerator("workspace-package", {
    description: "Creates a workspace",
    prompts: [
      {
        type: "list",
        name: "technology",
        message: "Technology",
        choices: ["elixir", "nodejs", "react-native", "reactjs"],
      },
      {
        type: "number",
        name: "chapter",
        message: "Chapter number",
      },
      {
        type: "number",
        name: "challenge",
        message: "Challenge number",
      },
    ],
    actions: [
      {
        type: "add",
        path: "courses/{{technology}}/{{chapter}}-{{challenge}}/package.json",
        templateFile: "plop-templates/workspace-package.json",
      },
    ],
  });
};
