# Summary
This example is part of the "Working with Datasets" section of the Node curriculum at Thinkful.

https://courses.thinkful.com/node-postgres-v1/checkpoint/6

## Example
Create a project called moviedex-api and initialize it as an Express app to meet the following requirements.

### Requirements
1. Users can search for Pokemon by name or type
- The endpoint is GET /pokemon
- The search options for either name or type are provided in query string parameters.
- When searching by name, users are searching for whether the Pokemon's name includes a specified string. The search should be case insensitive.
- When searching by type, users must specify one of the valid types.
- The API responds with an array of full pokedex entries for the search results
2. Users can request a list of all the valid types of Pokemon.
- The endpoint is GET /types
3. Both endpoints are public and only respond when given a valid Authorization header with a Bearer API token value.
4. Both endpoints should have general security in place.

### Example Commands
* http://localhost:8000/types
* http://localhost:8000/pokemon
* http://localhost:8000/pokemon?name=PsyDuCk&type=Water