var steps = [
  {
    tags: ["values", "go", "here"],
    html: "Some shit goes here.",
    sub: [
      {
        tags: ["subthing"],
        html: "Goes here."
      }
    ]
  }
]

steps[1].tags[3]

steps[2].sub[2].tags[1]

steps[3].sub[2].sub[5].html

var steps2 = [
  [
    ["some", "tags"],
    "Some description.",
    [
      ["some more tags"],
      "Another description."
    ]
  ]
]
