# Operators
- **Square Brackets Operator:** `[]`, your choice of character/s
- **Parentheses Operator:** `()`, used for grouping
  - Parentheses are primarily used to capture groups of characters for replacement, later.

#### Outside of `[]`
- **Star Operator:** `*`, zero or more
- **Optional Operator:** `?`, zero or one
- **Plue Operator:** `+`, one or more
- **Dot Operator:** `.`, any one character
- **Hat Operator:** `^`, start of input anchor
- **Dollar Sign Operator:** `?`, end of input anchor

#### Inside of `[]`
- **Dash Operator:** `[-]`, a range of characters
- **Hat Operator:** `[^]`, none of these characters

#### Special Character Classes
- `\s`: whitespace (space, tab, newline)
- `\d`: digit
- `\w`: word character (letter, digit, underscore)
- `\S`: not whitespace
- `\D`: not a digit
- `\W`: not a word character

> **Note:** You can "escape" any character using `\`.
