# GraphQL
The GraphQL project from the 01 Edu curriculum is designed to help you learn how to interact with a GraphQL API by building a personalized profile page. You will query your own data from the school’s GraphQL endpoint and visualize it in a user-friendly interface, including at least two different SVG-based statistical graphs.

# Main Tasks
## 1. Create a Profile Page Using GraphQL

- Connect to the provided GraphQL endpoint:
https://((DOMAIN))/api/graphql-engine/v1/graphql.

- Query your own data to display on your profile page.

- You must display at least three types of information about yourself (e.g., user identification, XP, grades, audits, skills).

## 2. Implement a Login System

- Build a login page that authenticates users via the signin endpoint:
https://((DOMAIN))/api/auth/signin.

- Accept both username:password and email:password for login.

- Use Basic authentication (base64 encoding) to get a JWT.

- Store the JWT and use it as a Bearer token for subsequent GraphQL requests.

- Display appropriate error messages for invalid credentials.

- Provide a logout functionality.

## 3. Display Statistical Graphs Using SVG

- Your profile page must include a statistics section with at least two different SVG-based graphs.

- Possible graph ideas include:

    XP earned over time

    XP by project

    Audit pass/fail ratio

    Project pass/fail ratio

    Piscine stats

    Attempts per exercise

- Graphs can be interactive or animated, but must use SVG.

## 4. Host Your Profile

- Deploy your finished profile page to a public hosting service (e.g., GitHub Pages, Netlify, etc.).

## Tips
- Explore the GraphQL schema using GraphiQL if available.

- Focus on clear, user-friendly UI and good SVG graph design.

- Check the audit directory for detailed evaluation points.

- You can display additional information if you wish—this is encouraged.

Reference: https://github.com/01-edu/public/tree/master/subjects/graphql