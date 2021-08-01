// import path from 'path';
// import webpack from 'webpack';
// import WebPackDevServer from 'webpack-dev-server';
// import webpackConfig from './webpack.config.js';
// import oldSchema from './schema';
// import cors from 'cors';

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './data/schema';

const GRAPHQL_PORT = 3000;

// GraphQL server
const graphQLServer = express();
graphQLServer.use('/', graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(`GraphQL server on http://localhost:${GRAPHQL_PORT}`));


// const APP_PORT = 3001;
// Relay
// const compiler = webpack(webpackConfig);

// const app = new WebPackDevServer(compiler, {
    //     contentBase: '/public/',
    //     proxy: { '/graphql': `http://localhost:${GRAPHQL_PORT}` },
//     publicPath: '/src/',
//     stats: { colors: true },
// });

// const app = express();
// app.use(cors());
// app.use('/', express.static(path.resolve(__dirname, 'public')));
// app.get('/schema', function (req, res) {
//     return res.json({
//         schema: oldSchema,
//         config: oldSchema.toConfig(),
//         typeMap: oldSchema.getTypeMap(),
//     });
// })
// app.listen(APP_PORT, () => console.log(`App is now running on localhost:${APP_PORT}`));
