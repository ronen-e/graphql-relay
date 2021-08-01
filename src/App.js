import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import Friends from './components/Friends';

// Network Layer
function fetchQuery(operation, variables) {
	return fetch('/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: operation.text,
			variables: variables
		})
	}).then(response => response.json())
}

// Relay Environment
const modernEnvironment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource())
})

export function App() {

	React.useEffect(() => {
		fetch('http://localhost:3001/schema').then(res => res.json()).then(console.log);
	}, [])

	return (
		<QueryRenderer
			environment={modernEnvironment}
			query={graphql`
				query AppQuery {
					viewer {
						...Friends_viewer
					}
				}
			`}
			variables={{}}
			render={({ error, props }) => {
				if (props) {
					return <Friends viewer={props.viewer} />;
				} else {
					return <div>Loading...</div>
				}
			}}
		/>
	)
}

