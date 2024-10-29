
# GitHub Username Checker

A simple Node.js application to check the availability of GitHub usernames. This tool helps you quickly determine whether a username is available for registration on GitHub.

## Features

- Checks the availability of multiple usernames from a text file.
- Outputs available usernames to a separate file.
- Provides a clear console output indicating the availability of each username.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/infallibless/github-username-checker.git
   cd github-username-checker
   ```

2. Install the required dependencies:

   ```bash
   npm install axios kleur
   ```

3. Create a file named `usernames.txt` in the project directory. Add the usernames you want to check, each on a new line.

## Usage

Run the application using the following command:

```bash
node index.js
```

The script will read usernames from `usernames.txt`, check their availability, and log the results in the console. Available usernames will be saved in `available.txt`.

### Example of `usernames.txt`

```
username1
username2
username3
```

### Output

- Available usernames will be displayed in green in the console and saved in `available.txt`.
- Unavailable usernames will be displayed in red.

## Contribution

Contributions are welcome! If you have suggestions or improvements, feel free to create a pull request.

## 📜 Copyright

© 2024 raynex. All rights reserved.

All files in this repository, unless otherwise noted, are released under the MIT License. By using, distributing, or modifying this code, you acknowledge the copyright holder's rights and agree to retain this copyright notice in any redistribution.

