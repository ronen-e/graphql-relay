# Usage

## Build

```
yarn build
```

## Serve

```
yarn start
```

Go to http://localhost:8080

# Steps

1. Add babel plugins `relay, transform-runtime`
1. Setup GraphQL schema in `data/schema.js`. A readable form of the schema is in `data/old-schema.js`
1. Generate `schema.graphql` using `scripts/updateSchema.js` script
1. Compile `schema.grahpql` using relay-compiler which will generate the requisite files in `__generated__` folders
1. Setup database connection (`data/database.js`)
1. Now we can make queries using `viewer.friend.edges.node`
1. Add the relay entry component (`App.js`)
1. Add child components
1. install [watchman](https://facebook.github.io/watchman/) to watch files

## Setup GraphQL schema (data/schema.js)

1. Define types using `new GraphQLObjectTypes(config)`
1. Define connections between types
1. Add connections to types using `type, args, resolve` settings
1. Add resolver interfaces to resolve queries.
1. Add `Query` type for the main query with type fields `node, viewer`. the `viewer` should be the main result of the query, in our case `User`
1. Add `schema` type using `new GraphQLScehma()` and plug the `Query` using the query field: `{ query: Query }`

### Define connections between types

1. Use `connectionDefinitions` function
1. Plug the `result.connectionType` as a `type` field where required.

### Add interface

It is necessary to setup the resolvers between Query and Query types and database

1. use `nodeDefinitions` to setup type resolvers
1. in each main type add the field `interface: [result.nodeInterface]`
1. in the `Query` type use `node: result.nodeField`.

### Add Relay entry component

1. Use `QueryRenderer` component
1. Add environment prop
1. Add query prop - which determines the GraphQL query
1. Add variables prop if needed
1. Add render prop - which determines what gets rendered

### Add Relay child component

1. Create the component and assume it will receive a `viewer` prop
1. wrap the component with `createFragmentContainer(component, query)` from `react-relay`
1. use `graphql` from `react-relay` to setup the `viewer` prop.
1. the viewer prop should return a GraphQL fragment. The fragment can delegate fields to child components using the `viewer` prop. So we do not have to copy paste duplicate values between components (see `Friend_viewer` & `FriendsList_viewer`).

#### Add environment

We need to setup the environment relay will use - the network layer & data store where our data will be stored.

- import Environment, Network, RecordSource, Store from 'relay-runtime';
- setup the network layer which will access the GraphQL server (see `App.js@fetchQuery` function)

```js
function fetchQuery(operation, variables) {
  return fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables: variables,
    }),
  }).then((response) => response.json());
}
```

- use `new Environment()` and add the network & store fields (see `App.js`)

```js
const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
```

#### Add query prop

1. use `viewer` field in the query
1. the result `createFragmentContainer` will be converted to a prop to the component
1. use a fragment to determine the next result. The fragment should be named as
   {ComponentName}\_{propName}

Example:

```jsx
export default createFragmentContainer(Friend, {
  friend: graphql`
    fragment Friend_friend on Friend {
      id
      firstName
      lastName
      gender
      language
      email
      image
    }
  `,
  viewer: graphql`
    fragment Friend_viewer on User {
      id
    }
  `,
});
```

```jsx
<span className="card-title">
  {this.props.friend.firstName} {this.props.friend.lastName}
</span>
```

## TODO:

- check if `Friend_viewer` is necessary
- what is watchman for ?

## Test data

See `resources/query&mutationsEx.txt`

# Links

- https://github.com/sogko/graphql-schema-language-cheat-sheet
- https://devhints.io/graphql
- https://gist.github.com/jbritton/1f60ef440686b51ee37b708e6376b26e
- https://leapgraph.com/graphql-cheat-sheet/
- https://cheatsheetmaker.com/graphql
- https://learn.graphile.org/docs/GraphQL_Operation_Cheatsheet.pdf
