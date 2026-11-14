const ALLOWED_COMMENT = /^\s*(TODO\b|guard:|eslint-(disable|enable)|@ts-expect-error)/i;

export const noComments = {
  meta: {
    type: "suggestion",
    messages: {
      comment:
        "Comments are only TODO, one-line guards ('guard: …'), or tool directives (AGENTS.md, rule 9). Rename or split instead.",
    },
    schema: [],
  },
  create(context) {
    return {
      Program() {
        for (const comment of context.sourceCode.getAllComments()) {
          if (!ALLOWED_COMMENT.test(comment.value)) context.report({ loc: comment.loc, messageId: "comment" });
        }
      },
    };
  },
};

export const mobileRules = { rules: { "no-comments": noComments } };
