# task6
Task 6

Sure, here's a brief description of the regular expressions (regex) pattern used in the code:

1. `/[-\s]/g`: This regex pattern is used with the `replace` function to remove dashes (`-`) and spaces (`\s`) from the card number. The `g` flag ensures that all occurrences are replaced, not just the first one.

2. `/^\d{13,16}$/`: This regex pattern checks if the card number consists of 13 to 16 digits only. Here's what each part means:
   - `^`: Asserts the start of the string.
   - `\d`: Matches any digit (equivalent to `[0-9]`).
   - `{13,16}`: Specifies that there should be between 13 and 16 occurrences of the preceding digit matcher (`\d`).
   - `$`: Asserts the end of the string.

These regex patterns help ensure that the card number input meets certain criteria before further validation is performed.